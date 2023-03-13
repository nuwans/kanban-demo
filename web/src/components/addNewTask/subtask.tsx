import Image from "../../config/images";

import {
  ColumnWrapper,
  Input,
  InputWrapper,
  RemoveIcon,
} from "./styledComponent";
import { iCreateTask } from "../../interfaces/tasks";
interface Props {
  id: number;
  title: string;
  onChange: (o: Partial<iCreateTask>) => void;
  onRemove: (id: number) => void;
}

const SubTaskElement = ({ id, onChange, onRemove, title }: Props) => {
  const onChangeVal = (val:string) => {
    onChange({id,title:val})
  };
  return (
    <ColumnWrapper>
      <InputWrapper>
        <Input
          placeholder="e.g. Make coffee"
          name={"title"}
          value={title}
          onChange={(e) => {
            onChangeVal(e.currentTarget.value);
          }}
        ></Input>
      </InputWrapper>
      <RemoveIcon onClick={() => onRemove(id)}>
        <Image icon="remove"></Image>
      </RemoveIcon>
    </ColumnWrapper>
  );
};
export default SubTaskElement;
