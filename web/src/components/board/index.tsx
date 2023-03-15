import { useState } from "react";
import { htmlColors } from "../../config/static";
import { iBoard } from "../../interfaces/board";
import { iColumn } from "../../interfaces/column";
import { iTask } from "../../interfaces/tasks";
import ColumnElement from "./column";
import { HTML5Backend } from 'react-dnd-html5-backend';
import {
  AddNewColumn,
  AddNewColumnButton,
  AddNewColumnButtonWrapper,
  AddNewContent,
  BoardWrapper,
  ColoumnName,
  ColoumnNameIcon,
  Column,
  EmptyBoardWrapper,
  NewColumn,
  TaskCard,
  TaskName,
  TaskSubHeader,
} from "./styledComponent";
import { DndProvider, } from "react-dnd";

interface Props {
  board: iBoard;
  addColumn: () => void;
  openTask: (task: iTask) => void;
}
const Board = ({ board, addColumn, openTask }: Props) => {
  const { columns = [] } = board;
  const [draggingElement, setDraggingElement] = useState<iTask>();
  if (columns.length === 0) {
    return (
      <EmptyBoardWrapper>
        <AddNewContent>
          This board is empty. Create a new column to get started.
        </AddNewContent>
        <AddNewColumnButtonWrapper>
          <AddNewColumnButton onClick={addColumn}>
            + Add New Column
          </AddNewColumnButton>
        </AddNewColumnButtonWrapper>
      </EmptyBoardWrapper>
    );
  }

  return (
    <BoardWrapper>
      <DndProvider backend={HTML5Backend}>
        {columns.map((c: iColumn, id: number) => {
          return (
            <ColumnElement
              draggingElement={draggingElement}
              setDraggingElement={setDraggingElement}
              key={c.id}
              column={c}
              openTask={openTask}
            />
          );
        })}
      </DndProvider>
      <NewColumn>
        <AddNewColumn onClick={addColumn}>
          + New Column
        </AddNewColumn>
      </NewColumn>
    </BoardWrapper>
  );
};
export default Board;
