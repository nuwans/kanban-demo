import React, { useState } from "react";
import styled from "styled-components";
import {
  DropdownContainer,
  DropdownHeader,
  DropdownItem,
  DropdownList,
  OptionDropDownContainer,
  OptionDropdownHeader,
  OptionDropdownItem,
  OptionDropdownList,
} from "./styledComponent";
import { iColumn } from "../../interfaces/column";
import { Id } from "@reduxjs/toolkit/dist/tsHelpers";
import Image from "../../config/images";
import { iTask } from "../../interfaces/tasks";
interface Props {
  task: iTask;
  editTask: (task: iTask) => void;
  deleteTask: (task: iTask) => void;
}

const OptionDropdown = ({ task, editTask, deleteTask }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <OptionDropDownContainer>
      <OptionDropdownHeader onClick={toggleDropdown}>
        <Image onClick={toggleDropdown} icon="three-dots"></Image>
      </OptionDropdownHeader>

      {isOpen && (
        <OptionDropdownList>
          <OptionDropdownItem
            key={1}
            onClick={() => {
              toggleDropdown();
              editTask(task);
            }}
          >
            Edit Task
          </OptionDropdownItem>
          <OptionDropdownItem
            color="red"
            key={2}
            onClick={() => {
              toggleDropdown();
              deleteTask(task);
            }}
          >
            Delete Task
          </OptionDropdownItem>
        </OptionDropdownList>
      )}
    </OptionDropDownContainer>
  );
};

export default OptionDropdown;
