import Image from "../../config/images";
import { iBoard } from "../../interfaces/board";
import {Button, ImageWrap} from "./styledComponent";
import { BoardName, ButtonCorner, HeaderRight } from "./styledComponent";
interface Props {
  board: iBoard;
  setAddTaskModalVisible:()=>void;
}

const HeaderComp = ({board,setAddTaskModalVisible}:Props) => {
  const {columns,name}=board
  return <HeaderRight>
    <BoardName>{name} </BoardName>
    <ButtonCorner>
        <Button onClick={setAddTaskModalVisible} disabled={name==='' || columns.length===0?true:false} >+ Add New Task</Button>
        <ImageWrap>
        <Image icon='three-dots'></Image>
        </ImageWrap>
        
    </ButtonCorner>
  </HeaderRight>;
};
export default HeaderComp;
