import { htmlColors } from "../../config/static";
import { iBoard } from "../../interfaces/board";
import { iColumn } from "../../interfaces/column";
import { iTask } from "../../interfaces/tasks";
import {
  AddNewColumnButton,
  AddNewColumnButtonWrapper,
  AddNewContent,
  BoardWrapper,
  ColoumnName,
  ColoumnNameIcon,
  Column,
  EmptyBoardWrapper,
  TaskCard,
  TaskName,
  TaskSubHeader,
} from "./styledComponent";

interface Props {
  board: iBoard;
  addColumn: () => void;
  openTask:(task:iTask)=>void
}
const Board = ({ board, addColumn,openTask }: Props) => {
  const { columns = [] } = board;
  if (columns.length === 0) {
    return (
      <EmptyBoardWrapper>
        <AddNewContent>
          This board is emptys. Create a new column to get started.
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
      {columns.map((c: iColumn,id:number) => {
        return (
          <Column key={c.id}>
            <ColoumnName>
              <ColoumnNameIcon color={htmlColors[id%10]}></ColoumnNameIcon>
              {c.name}
            </ColoumnName>
            {c.tasks
              ?.filter((task) => task.parentId === null)
              .map((task: iTask) => {
                return (
                  <TaskCard  onClick={()=>openTask(task)} key={task.id}>
                    <TaskName>{task.title}</TaskName>
                    <TaskSubHeader>
                      {task.subTasks?.filter((st) => !st.status).length} of{" "}
                      {task.subTasks?.filter((st) => !st.status).length}{" "}
                      subtasks
                    </TaskSubHeader>
                  </TaskCard>
                );
              })}
          </Column>
        );
      })}

      <AddNewColumnButton onClick={addColumn}>
        + Add New Column
      </AddNewColumnButton>
    </BoardWrapper>
  );
};
export default Board;
