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

const DeletBoardModal = ({ onClose, isOpen,onDelete,name }: Props) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Header>Delete this board</Header>
      <Content>`Are you sure you want to delete the (${name}) board? This action will remove all columns and tasks and cannot be reversed.`</Content>
      <ButtonWrapper>
        <ButtonDanger onClick={onDelete}>Delete</ButtonDanger>
        <ButtonCancel onClick={onClose}>Cancel</ButtonCancel>
      </ButtonWrapper>
    </Modal>
  );
};
export default DeletBoardModal;
