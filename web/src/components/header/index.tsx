import { useState } from "react";
import Image from "../../config/images";
import { iBoard } from "../../interfaces/board";
import OptionDropdown from "./optionDropDown";
import { Button, ButtonMobile, ImageWrap } from "./styledComponent";
import { BoardName, ButtonCorner, HeaderRight } from "./styledComponent";
import DeletBoardModal from "../deletBoardModal";
import { useBoards } from "../../hooks/useBoards";
interface Props {
  board: iBoard;
  editBoard: () => void;
  setAddTaskModalVisible: () => void;
}

const HeaderComp = ({ board, setAddTaskModalVisible,editBoard }: Props) => {
  const { columns, name } = board;
  const { deletBoard } =
  useBoards();
  const [deleting,setDeleting]=useState<boolean>(false)
  const del = (bo: iBoard) => {
    setDeleting(true)
  };
  const onDelete = () => {
    deletBoard(board.id).then((r)=>{
      if(r.success){
        setDeleting(false)
      }
    })
  };
  return (
    <HeaderRight>
      <BoardName>{name} </BoardName>
      <ButtonCorner>
        <Button
          onClick={setAddTaskModalVisible}
          disabled={name === "" || columns.length === 0 ? true : false}
        >
          + Add New Task
        </Button>
        <ButtonMobile
          onClick={setAddTaskModalVisible}
          disabled={name === "" || columns.length === 0 ? true : false}
        >
          + 
        </ButtonMobile>
        <OptionDropdown
          board={board}
          editBoard={editBoard}
          deleteBoard={del}
        ></OptionDropdown>
      </ButtonCorner>
      {deleting&& < DeletBoardModal name={name}isOpen={deleting} onDelete={onDelete} onClose={()=>setDeleting(false)}/>}
      
    </HeaderRight>
  );
};
export default HeaderComp;
