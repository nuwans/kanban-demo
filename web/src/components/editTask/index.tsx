import { useState } from "react";
import Image from "../../config/images";
import Modal from "../model";
import {
  ColoumnButton,
  Header,
  Input,
  InputWrapper,
  Label,
  NewButton,
  Select,
  SelectOption,
  TextArea,
} from "./styledComponent";
import { iColumn } from "../../interfaces/column";
import ColumnElement from "./subtask";
import { iAddBoard, iBoard, iCreateBoard } from "../../interfaces/board";
import { iCreateTask, iTask } from "../../interfaces/tasks";
import SubTaskElement from "./subtask";
import CustomDropdown from "./dropDown";
import { useBoards } from "../../hooks/useBoards";
interface Props {
  onClose: () => void;
  board: iBoard;
  isOpen: boolean;
  task: iTask;
}

const EditTaskModal = ({ onClose, isOpen, board, task }: Props) => {
  const { updateTask } = useBoards();
  const [title, setTitle] = useState<string>(task.title);
  const [description, setDescription] = useState<string>(
    task.description ? task.description : ""
  );
  const [subtasks, setSubTasks] = useState<iTask[]>(
    task.subTasks ? task.subTasks : []
  );
  const [columnId, setColumn] = useState<number>(task.columnId);
  const addSubTask = () => {
    setSubTasks([
      ...subtasks,
      {
        boardId: board.id,
        id: Date.now(),
        status: false,
        title: "",
        columnId,
        description: "",
      },
    ]);
  };
  const changeSubTask = (o: Partial<iCreateTask>) => {
    const { id, title = "" } = o;
    console.log(subtasks);
    setSubTasks((prevArray) => {
      const newArray = [...prevArray];

      for (let i = 0; i < newArray.length; i++) {
        if (newArray[i].id === id) {
          const { id, title: oldName, boardId, status = false } = newArray[i];
          newArray[i] = {
            id,
            title,
            boardId,
            columnId,
            status,
          };
          break;
        }
      }
      return newArray;
    });
  };
  const removeSubTask = (id: number) => {
    setSubTasks(subtasks.filter((c) => c.id != id));
  };
  const saveTask = () => {
    const udatedTask: iTask = {
      boardId: board.id,
      title,
      status: false,
      columnId: 1,
      id: task.id,
      description,
      subTasks: subtasks,
    };
    updateTask(udatedTask).then((rs) => {
      if (rs.success) {
        onClose();
      } else {
        console.log("error");
      }
    });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Header>Edit Task</Header>
      <Label>Title</Label>
      <InputWrapper>
        <Input
          placeholder="e.g. Take coffee break"
          name={"title"}
          value={title}
          onChange={(e) => {
            setTitle(e.currentTarget.value);
          }}
        ></Input>
      </InputWrapper>
      <Label>Description</Label>
      <InputWrapper>
        <TextArea
          placeholder="e.g. It’s always good to take a break. This 15 minute break will 
          recharge the batteries a little."
          name={"description"}
          rows={5}
          value={description}
          onChange={(e) => {
            setDescription(e.currentTarget.value);
          }}
        ></TextArea>
      </InputWrapper>
      <Label>Subtasks</Label>
      {subtasks.map((st: iCreateTask) => {
        return (
          <SubTaskElement
            id={st.id}
            title={st.title}
            key={st.id}
            onChange={changeSubTask}
            onRemove={removeSubTask}
          ></SubTaskElement>
        );
      })}
      <ColoumnButton
        onClick={() => {
          addSubTask();
        }}
      >
        +Add New Subtask
      </ColoumnButton>
      <Label>Status</Label>
      <CustomDropdown
        options={board.columns}
        value={columnId}
        onSelect={(id: number) => setColumn(id)}
      />
      <NewButton
        onClick={() => {
          saveTask();
        }}
      >
        Save Changes
      </NewButton>
    </Modal>
  );
};
export default EditTaskModal;
