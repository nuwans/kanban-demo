import { useState } from "react";
import Modal from "../model";
import {
  ColoumnButton,
  Header,
  Input,
  InputWrapper,
  Label,
  NewButton,
  TextArea,
} from "./styledComponent";
import {  iBoard } from "../../interfaces/board";
import { iCreateTask } from "../../interfaces/tasks";
import SubTaskElement from "./subtask";
import CustomDropdown from "./dropDown";
interface Props {
  onClose: () => void;
  board: iBoard;
  isOpen: boolean;
  addTask: (task: iCreateTask) => void;
}

const AddTaskModal = ({ onClose, isOpen, addTask, board }: Props) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [subtasks, setSubTasks] = useState<iCreateTask[]>([]);
  const [columnId, setColumn] = useState<number>(board.columns[0].id);
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
    setSubTasks((prevArray) => {
      const newArray = [...prevArray];
      for (let i = 0; i < newArray.length; i++) {
        if (newArray[i].id === id) {
          newArray[i].title = title;
          break;
        }
      }
      return newArray;
    });
  };
  const removeSubTask = (id: number) => {
    setSubTasks(subtasks.filter((c) => c.id !== id));
  };
  const saveTask = () => {
    const task: iCreateTask = {
      boardId: board.id,
      title,
      status: false,
      columnId,
      id: 1,
      description,
      subTasks: subtasks,
    };

    addTask(task);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Header>Add New Task</Header>
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
        Create New Task
      </NewButton>
    </Modal>
  );
};
export default AddTaskModal;
