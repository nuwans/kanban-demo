import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalScroll = styled.div`
  max-height: 700px;
  overflow-y:scroll;
  @media screen and (max-width: ${(props) => props.theme.breackPoints.mobile}) {
    width: 360px;
  } ;
`;

export const ModalWrap = styled.div`
  background-color: ${(props) => props.theme.modalBg};
  width: 480px;
  margin:auto;
  border-radius: 6px;
  @media screen and (max-width: ${(props) => props.theme.breackPoints.mobile}) {
    width: 343px;
  } ;
`;

export const CloseIcon = styled.div`
  text-align: right;
  padding: 5px 10px;
  cursor: pointer;
`;
export const ContentWrapper = styled.div`
  margin: 10px 32px 32px;
  display: flex;
  flex-direction: column;
`;
export const Footer = styled.div`
  display: block;
  height: 10px;
`;
