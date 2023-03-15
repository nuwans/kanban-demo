import React, { useState } from "react";
import Image from "../../config/images";
import { iTask } from "../../interfaces/tasks";
import { OptionDropDownContainer, OptionDropdownHeader, OptionDropdownItem } from "../viewTask/styledComponent";
import { iBoard } from "../../interfaces/board";
import { OptionDropdownList } from "./styledComponent";
interface Props {
  board: iBoard;
  editBoard: (board: iBoard) => void;
  deleteBoard: (task: iBoard) => void;
}

const OptionDropdown = ({ board, editBoard, deleteBoard }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <OptionDropDownContainer>
      <OptionDropdownHeader onClick={toggleDropdown}>
        <Image onClick={toggleDropdown} icon="three-dots"></Image>
      </OptionDropdownHeader>

      {isOpen && board.id!==0&& (
        <OptionDropdownList>
          <OptionDropdownItem
            key={1}
            onClick={() => {
              toggleDropdown();
              editBoard(board);
            }}
          >
            Edit Board
          </OptionDropdownItem>
          <OptionDropdownItem
            color="red"
            key={2}
            onClick={() => {
              toggleDropdown();
              deleteBoard(board);
            }}
          >
            Delete Board
          </OptionDropdownItem>
        </OptionDropdownList>
      )}
    </OptionDropDownContainer>
  );
};

export default OptionDropdown;
