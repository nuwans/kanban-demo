import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ThemeEnum } from '../interfaces/enums';

export interface GlobalState {
  theme: ThemeEnum;
  
}
const staticTheme = localStorage.getItem("theme") ===ThemeEnum.LIGHT? ThemeEnum.LIGHT:ThemeEnum.DARK;
console.log(staticTheme,'static theme')
const initialState: GlobalState = {
  theme:staticTheme,
};

const globalState = createSlice({
  name: 'global',
  initialState,
  reducers: {
    changeThemeAction(state: GlobalState, action: PayloadAction<any>) {
      state.theme = action.payload.theme;
    },
  },
});

export const { changeThemeAction } = globalState.actions;
export default globalState.reducer;
