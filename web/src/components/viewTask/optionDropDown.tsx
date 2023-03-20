import React, { useEffect, useRef, useState } from "react";
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
  const boxRef = useRef<HTMLDivElement>(null);
  const [x, setX] = useState<number>(0);
  const [y, setY] = useState<number>(0);

  const toggleDropdown = () => {
    getPosition()
    setIsOpen(!isOpen);
  };
  const getPosition = () => {
    if (boxRef != null) {
      const xPlace = boxRef.current?.parentElement?.offsetLeft;
      if (xPlace) {setX(xPlace);}
      const yPlace = boxRef.current?.parentElement?.offsetTop;
      if(yPlace){
        setY(yPlace);
      }
    }
  };
  useEffect(() => {
    getPosition();
  }, []);
  useEffect(() => {
    window.addEventListener("resize", getPosition);
    return () => {
      window.removeEventListener("resize", getPosition);
    };
  }, []);
  return (
    <OptionDropDownContainer>
      <OptionDropdownHeader onClick={toggleDropdown}>
        <Image onClick={toggleDropdown} icon="three-dots"></Image>
      </OptionDropdownHeader>
      <OptionDropDownContainer ref={boxRef}>
        {isOpen && (
          <OptionDropdownList x={x} y={y}>
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
