import { useState } from "react";
import Image from "../../config/images";
import Modal from "../model";
import {
  CheckboxCheckmark,
  CheckboxInput,
  CheckboxLabel,
  ColumnWrapper,
  CustomCheckbox,
  //Input,
 // InputWrapper,
 // RemoveIcon,
  TaskName,
  TaskWrapper,
} from "./styledComponent";
import { iColumn } from "../../interfaces/column";
import { iCreateTask, iTask } from "../../interfaces/tasks";
interface Props {
  id: number;
  title: string;
  status: boolean;
  onChange: (o: Partial<iTask>) => void;
}

const SubTaskElement = ({ id, onChange, title, status }: Props) => {
  const handleCheckboxChange = (event: any) => {
    console.log(event.target.checked,status)
    onChange({id,status:event.target.checked})
  };
  return (
    <ColumnWrapper>
      <TaskWrapper status={status}>
      <CustomCheckbox>
        <CheckboxLabel>
          <CheckboxInput
            checked={status}
            type="checkbox"
            onChange={handleCheckboxChange}
          />
          <CheckboxCheckmark></CheckboxCheckmark>
        </CheckboxLabel>
      </CustomCheckbox>
      <TaskName status={status}>{title}</TaskName>
      </TaskWrapper>
    </ColumnWrapper>
  );
};
export default SubTaskElement;
