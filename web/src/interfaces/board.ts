import { iColumn, iCreateColumn } from "./column";

export interface iAddBoard {
  name: string;
}

export interface iBoard {
  name: string;
  id: number;
  columns: iColumn[];
}
export interface iCreateBoard {
    name: string;
    id?: number;
    columns: iCreateColumn[];
  }
  