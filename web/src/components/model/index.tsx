import {
  CloseIcon,
  ContentWrapper,
  Footer,
  ModalContainer,
  ModalScroll,
  ModalWrap,
} from "./styledComponent";

interface Props {
  children?: any;
  onClose: () => void;
  isOpen: boolean;
}
const Modal = ({ isOpen, onClose, children }: Props) => {
  if (!isOpen) {
    return null;
  }

  return (
    <ModalContainer>
      <ModalScroll>
      
        <ModalWrap>
          <CloseIcon onClick={onClose}>x</CloseIcon>
          <ContentWrapper>{children}</ContentWrapper>
          <Footer></Footer>
        </ModalWrap>
      </ModalScroll>
    </ModalContainer>
  );
};

export default Modal;
