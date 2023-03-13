import { configureStore } from '@reduxjs/toolkit';
import globalReducer from './global';
import boardReducer from './board';

const store = configureStore({
  reducer: {
    global: globalReducer,
    board: boardReducer,
  },
});

export default store;
