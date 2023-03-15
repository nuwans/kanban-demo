import { useState } from "react";
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
  NewColumn,
  TaskCard,
  TaskName,
  TaskSubHeader,
} from "./styledComponent";
import { useDrop } from "react-dnd";
import TaskElement from "./task";
import { useBoards } from "../../hooks/useBoards";
interface Props {
  column: iColumn;
  openTask: (task: iTask) => void;
  draggingElement?: iTask;
  setDraggingElement: (task: iTask) => void;
}
const ColumnElement = ({ column, openTask, draggingElement }: Props) => {
  const { editTaskColumn } = useBoards();
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: "task",
    drop: (task: iTask) => {
      console.log(task, column.id);
      editTaskColumn({ id: task.id, columnId: column.id });
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));
  const { name, tasks, id } = column;

  return (
    <Column isOver={isOver} ref={drop}>
      <ColoumnName>
        <ColoumnNameIcon color={htmlColors[id % 10]}></ColoumnNameIcon>
        {name}
      </ColoumnName>
      {tasks
        ?.filter((task) => task.parentId === null)
        .map((task: iTask) => {
          return <TaskElement openTask={openTask} key={task.id} task={task} />;
        })}
    </Column>
  );
};
export default ColumnElement;
