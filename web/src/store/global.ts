import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ThemeEnum } from '../interfaces/enums';

export interface GlobalState {
  theme: ThemeEnum;
  
}

const initialState: GlobalState = {
  theme:ThemeEnum.LIGHT
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
