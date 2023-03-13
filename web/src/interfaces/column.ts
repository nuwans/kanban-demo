import { iTask } from "./tasks";

export interface iColumn {
  name: string;
  id:number;
  boardId?:number;
  tasks?:iTask[]
}

export interface iCreateColumn {
  name: string;
  id?:number;
}

