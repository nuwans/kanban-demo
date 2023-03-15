import { useState } from "react";
import Modal from "../model";
import {
  ColoumnButton,
  Header,
  Input,
  InputWrapper,
  Label,
  NewButton,
} from "./styledComponent";
import { iColumn } from "../../interfaces/column";
import ColumnElement from "./column";
import {  iCreateBoard } from "../../interfaces/board";
interface Props {
  onClose: () => void;
  isOpen: boolean;
  addBoard: (board: iCreateBoard) => void;
}

const AddBoardModal = ({ onClose, isOpen, addBoard }: Props) => {
  const [name, setName] = useState<string>("");
  const [columns, setColumns] = useState<iColumn[]>([]);
  const addColumn = () => {
    setColumns([...columns, { id: Date.now(), name: "" }]);
  };
  const changeColumn = (o: iColumn) => {
    const { id, name } = o;
    setColumns((prevArray) => {
      const newArray = [...prevArray];
      for (let i = 0; i < newArray.length; i++) {
        if (newArray[i].id === id) {
          newArray[i].name = name;
          break;
        }
      }
      return newArray;
    });
  };
  const removeColumn = (id: number) => {
    setColumns(columns.filter((c) => c.id !== id));
  };
  const saveBoard = () => {
    const newArr = columns.map((obj) => {
      const { id, ...rest } = obj;
      return rest;
    });
    addBoard({ name, columns: newArr });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Header>Add New Board</Header>
      <Label>Board Name</Label>
      <InputWrapper>
        <Input
          placeholder="e.g. Web design"
          name={"name"}
          value={name}
          onChange={(e) => {
            setName(e.currentTarget.value);
          }}
        ></Input>
      </InputWrapper>
      <Label>Columns</Label>
      {columns.map((col) => {
        return (
          <ColumnElement
            id={col.id}
            name={col.name}
            key={col.id}
            onChange={changeColumn}
            onRemove={removeColumn}
          ></ColumnElement>
        );
      })}
      <ColoumnButton
        onClick={() => {
          addColumn();
        }}
      >
        +Add New Coloumn
      </ColoumnButton>
      <NewButton
        onClick={() => {
          saveBoard();
        }}
      >
        Create New Board
      </NewButton>
    </Modal>
  );
};
export default AddBoardModal;
