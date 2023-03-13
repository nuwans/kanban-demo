import Image from "../../config/images";
import {
  ColumnWrapper,
  Input,
  InputWrapper,
  RemoveIcon,
} from "./styledComponent";
import { iColumn } from "../../interfaces/column";
interface Props {
  id: number;
  name: string;
  onChange: (o: iColumn) => void;
  onRemove: (id: number) => void;
}

const ColumnElement = ({ id, onChange, onRemove, name }: Props) => {
  const onChangeVal = (val:string) => {
    onChange({id,name:val})
  };
  return (
    <ColumnWrapper>
      <InputWrapper>
        <Input
          placeholder="Todo"
          name={"name"}
          value={name}
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
export default ColumnElement;
