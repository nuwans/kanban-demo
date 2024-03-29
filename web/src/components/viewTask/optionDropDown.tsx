import React, { useState } from "react";
import {
  OptionDropDownContainer,
  OptionDropdownHeader,
  OptionDropdownItem,
  OptionDropdownList,
} from "./styledComponent";
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
      <OptionDropDownContainer>
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
    </OptionDropDownContainer>
  );
};

export default OptionDropdown;
