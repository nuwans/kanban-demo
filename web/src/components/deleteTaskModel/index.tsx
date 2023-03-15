import Modal from "../model";
import {
  ButtonCancel,
  ButtonDanger,
  ButtonWrapper,
  Content,
  Header,

} from "./styledComponent";
interface Props {
  onClose: () => void;
  isOpen: boolean;
  onDelete: () => void;
  name:string
}

const DeletTaskModal = ({ onClose, isOpen,onDelete,name }: Props) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Header>Delete this task?</Header>
      <Content>`Are you sure you want to delete the (${name}) task and its subtasks? This action cannot be reversed.`</Content>
      <ButtonWrapper>
        <ButtonDanger onClick={onDelete}>Delete</ButtonDanger>
        <ButtonCancel onClick={onClose}>Cancel</ButtonCancel>
      </ButtonWrapper>
    </Modal>
  );
};
export default DeletTaskModal;
