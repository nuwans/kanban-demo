import Modal from "../model";
import { ButtonCorner, Description, Header, Label } from "./styledComponent";
import { iBoard } from "../../interfaces/board";
import { iCreateTask, iTask } from "../../interfaces/tasks";
import SubTaskElement from "./subtask";
import CustomDropdown from "./dropDown";
import OptionDropdown from "./optionDropDown";
import { useBoards } from "../../hooks/useBoards";
import {  useState } from "react";
import DeletTaskModal from "../deleteTaskModel";
interface Props {
  onClose: () => void;
  board: iBoard;
  isOpen: boolean;
  task: iTask;
  addTask?: (task: iCreateTask) => void;
  editTask: (task: iTask) => void;
}

const ViewTaskModal = ({
  onClose,
  isOpen,
  board,
  task,
  editTask,
}: Props) => {
  const { editTaskStatus, editTaskColumn,deleteTask } = useBoards();
  const { subTasks = [], columnId } = task;
  const [deleting,setDeleting]=useState<boolean>(false)
  const changeSubTask = (o: Partial<iTask>) => {
    editTaskStatus(o);
  };
  const changeColumn = (columnId: number) => {
    editTaskColumn({ id: task.id, columnId });
    onClose();
  };
  const onDeleteTask = () => {
    setDeleting(true)
  };
  const onDeleteTaskAction = () => {
    deleteTask(task).then((rs)=>{
      if(rs.success){
        setDeleting(false)
        onClose()
      }
    })
  };
  

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Header>
        {task.title}
        <ButtonCorner>
          <OptionDropdown
            task={task}
            editTask={editTask}
            deleteTask={onDeleteTask}
          ></OptionDropdown>
        </ButtonCorner>
      </Header>
      <Description>{task?.description}</Description>
      <Label>Subtasks</Label>
      {[...subTasks]
        .sort((a, b) => {
          return a.id - b.id;
        })
        .map((st: iCreateTask) => {
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
      {deleting && <DeletTaskModal name={task.title} isOpen={deleting} onDelete={onDeleteTaskAction} onClose={()=>{setDeleting(false)}}></DeletTaskModal>}
    </Modal>
  );
};
export default ViewTaskModal;
