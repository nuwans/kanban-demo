import {
  CheckboxCheckmark,
  CheckboxInput,
  CheckboxLabel,
  ColumnWrapper,
  CustomCheckbox,
  TaskName,
  TaskWrapper,
} from "./styledComponent";

import {  iTask } from "../../interfaces/tasks";
interface Props {
  id: number;
  title: string;
  status: boolean;
  onChange: (o: Partial<iTask>) => void;
}

const SubTaskElement = ({ id, onChange, title, status }: Props) => {
  const handleCheckboxChange = (event: any) => {
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
