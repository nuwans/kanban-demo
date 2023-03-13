import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { iBoard } from '../interfaces/board';
import { iTask } from '../interfaces/tasks';


export interface BoardState {
  boards: iBoard[];
  board?:iBoard,
  task:iTask|null
  
}

const initialState: BoardState = {
  boards:[],
  task:null

};

const boardState = createSlice({
  name: 'board',
  initialState,
  reducers: {
    setBoards(state: BoardState, action: PayloadAction<any>) {
      state.boards = action.payload.boards;
    },
    setBoard(state: BoardState, action: PayloadAction<any>) {
      state.board = action.payload.board;
    },
    setTaskAction(state: BoardState, action: PayloadAction<any>) {
      state.task = action.payload.task;
    },
  },
});

export const { setBoards,setBoard,setTaskAction } = boardState.actions;
export default boardState.reducer;
