import { useState } from "react";
import Image from "../../config/images";
import Modal from "../model";
import { ButtonCorner, Description, Header, Label } from "./styledComponent";
import { iBoard } from "../../interfaces/board";
import { iCreateTask, iTask } from "../../interfaces/tasks";
import SubTaskElement from "./subtask";
import CustomDropdown from "./dropDown";
import OptionDropdown from "./optionDropDown";
import { useBoards } from "../../hooks/useBoards";
interface Props {
  onClose: () => void;
  board: iBoard;
  isOpen: boolean;
  task: iTask;
  addTask?: (task: iCreateTask) => void;
  editTask: (task: iTask) => void;
  deleteTask: (task: iTask) => void;
}

const ViewTaskModal = ({
  onClose,
  isOpen,
  board,
  task,
  editTask,
  deleteTask,
}: Props) => {
  const { editTaskStatus, editTaskColumn } = useBoards();
  const [description, setDescription] = useState<string>(
    task.description ? task.description : ""
  );
  const { subTasks = [] } = task;
  const [columnId, setColumn] = useState<number>(task.columnId);
  const changeSubTask = (o: Partial<iTask>) => {
    editTaskStatus(o);
  };
  const changeColumn = (columnId: number) => {
    editTaskColumn({ id: task.id, columnId });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Header>
        {task.title}
        {task.id}
        <ButtonCorner>
          <OptionDropdown
            task={task}
            editTask={editTask}
            deleteTask={deleteTask}
          ></OptionDropdown>
        </ButtonCorner>
      </Header>
      <Description>{description}</Description>
      <Label>Subtasks</Label>
      {subTasks.map((st: iCreateTask) => {
        return (
          <SubTaskElement
            id={st.id}
            title={st.title}
            status={st.status}
            key={st.id}
            onChange={changeSubTask}
          ></SubTaskElement>
        );
      })}
      <Label>Status</Label>
      <CustomDropdown
        options={board.columns}
        value={columnId}
        onSelect={(id: number) => changeColumn(id)}
      />
    </Modal>
  );
};
export default ViewTaskModal;
