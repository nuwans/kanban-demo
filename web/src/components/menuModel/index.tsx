import { useState } from "react";
import {
  BoardHeader,
  BoardWrapper,
  ContentWrapper,
  ModalContainer,
  ModalWrap,
} from "./styledComponent";
import { BoardState } from "../../store/board";
import { useSelector } from "react-redux";
import SideBarItem from "./sidebarItem";
import { useBoards } from "../../hooks/useBoards";
import SideBarItemNew from "./sidebarItemNew";
import SwitchContainer from "./switchContainer";
import { ThemeEnum } from "../../interfaces/enums";
import { GlobalState } from "../../store/global";
import { useGlobalConfig } from "../../hooks/useGlobalConfig";

interface Props {
  isOpen: boolean;
  addNew: () => void;
  onClose: () => void;
}

const MenuModel = ({ isOpen, addNew,onClose }: Props) => {
  const { pickAndSetBoard } = useBoards();
  const { theme = ThemeEnum.LIGHT }: Partial<GlobalState> = useSelector(
    (state: any) => state.global
  );
  const { changeTheme } = useGlobalConfig();
  const changeThemeName = (val: boolean) => {
    if (val) {
      changeTheme(ThemeEnum.LIGHT);
    } else {
      changeTheme(ThemeEnum.DARK);
    }
    onClose()
  };
  const {
    boards = [],
    board = { id: 0, name: "", columns: [] },
    task = null,
  }: Partial<BoardState> = useSelector((state: any) => state.board);
  const pickBoard = (id: number) => {
    let board = boards.find((b) => b.id === id);
    if (board) {
      pickAndSetBoard(board);
      onClose()
    }
  };
  if (!isOpen) {
    return null;
  }

  return (
    <ModalContainer>
      <ModalWrap>
        <ContentWrapper>
          <BoardWrapper>
            <BoardHeader>All Boards ({boards.length})</BoardHeader>
            {boards.map((b, i) => {
              return (
                <SideBarItem
                  selectedItem={board.id}
                  onClick={pickBoard}
                  key={i}
                  {...b}
                />
              );
            })}
            <SideBarItemNew
              key={-1}
              name={"+ Create New Board "}
              onClick={addNew}
            ></SideBarItemNew>
            <SwitchContainer
              theme={theme}
              onChange={changeThemeName}
            ></SwitchContainer>
          </BoardWrapper>
        </ContentWrapper>
      </ModalWrap>
    </ModalContainer>
  );
};
export default MenuModel;
