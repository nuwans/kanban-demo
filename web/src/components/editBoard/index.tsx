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
import { iBoard } from "../../interfaces/board";
interface Props {
  onClose: () => void;
  isOpen: boolean;
  board:iBoard,
  editBoard: (board: iBoard) => void;
}

const EditBoardModal = ({ onClose, isOpen,board, editBoard }: Props) => {
  const {name,columns,id} =board
  const [newName, setName] = useState<string>(name);
  const [newColumns, setColumns] = useState<iColumn[]>(columns);
  const addColumn = () => {
    setColumns([...newColumns, { id: Date.now(), name: "" }]);
  };
  const changeColumn = (o: iColumn) => {
    const { id, name } = o;
    setColumns((prevArray) => {
      const newArray = [...prevArray];
      for (let i = 0; i < newArray.length; i++) {
        if (newArray[i].id === id) {
          const {id,boardId}=newArray[i]
          newArray[i]={
            id,
            name:name,
            boardId
          };
          break;
        }
      }
      return newArray;
    }); 
  };
  const removeColumn = (id: number) => {
    setColumns(newColumns.filter((c) => c.id !== id));
  };
  const saveBoard = () => {
    editBoard({ name:newName,id, columns: newColumns });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Header>Edit Board</Header>
      <Label>Board Name</Label>
      <InputWrapper>
        <Input
          placeholder="e.g. Web design"
          name={"name"}
          value={newName}
          onChange={(e) => {
            setName(e.currentTarget.value);
          }}
        ></Input>
      </InputWrapper>
      <Label>Columns</Label>
      {newColumns.map((col) => {
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
        Save Changes
      </NewButton>
    </Modal>
  );
};
export default EditBoardModal;
