import styled from "styled-components";

export const Header = styled.div`
  color: ${(props) => props.theme.primaryContent};
  margin-bottom: 24px;
  font-size: ${(props) => props.theme.typograpy.headingL.fontSize};
  line-height: ${(props) => props.theme.typograpy.headingL.lineHeight};
  font-weight: ${(props) => props.theme.typograpy.headingL.fontWeight};
`;
export const Label = styled.div`
  color: ${(props) => props.theme.modalLabel};
  font-size: ${(props) => props.theme.typograpy.bodyM.fontSize};
  margin-bottom: 8px;
  margin-top: 24px;
`;

export const InputWrapper = styled.div`
  width: 100%;
`;

export const Input = styled.input`
  color: ${(props) => props.theme.modalInput};
  background: ${(props) => props.theme.modalInputBg};
  font-family: ${(props) => props.theme.typograpy.headingL.fontFamily};
  width: calc(100% - 30px);
  padding: 7px 16px 8px 16px;
  border: 1px solid rgba(130, 143, 163, 0.25);
  line-height: ${(props) => props.theme.typograpy.headingL.lineHeight};
  border-radius: 4px;
  font-size: ${(props) => props.theme.typograpy.bodyM.fontSize};
  &:focus,
  &:active {
    outline: none;
    border-color: rgba(130, 143, 163, 0.25);
  }
  ::placeholder {
    opacity: 25%;
  }
`;
export const TextArea = styled.textarea`
  color: ${(props) => props.theme.modalInput};
  background: ${(props) => props.theme.modalInputBg};
  font-family: ${(props) => props.theme.typograpy.headingL.fontFamily};
  width: calc(100% - 30px);
  padding: 7px 16px 8px 16px;
  border: 1px solid rgba(130, 143, 163, 0.25);
  line-height: ${(props) => props.theme.typograpy.headingL.lineHeight};
  border-radius: 4px;
  font-size: ${(props) => props.theme.typograpy.bodyM.fontSize};
  &:focus,
  &:active {
    outline: none;
    border-color: rgba(130, 143, 163, 0.25);
  }
  ::placeholder {
    opacity: 25%;
  }
`;


export const ColumnWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;
export const RemoveIcon = styled.div`
  margin-left: 16px;
`;
export const ColoumnButton = styled.button`
  width: 100%;
  border-radius: 20px;
  height: 40px;
  //margin-bottom: 24px;
  border: none;
  color: ${(props) => props.theme.button.secondary.color};
  background: ${(props) => props.theme.button.secondary.background};
  font-size: ${(props) => props.theme.typograpy.headingM.fontSize};
  line-height: ${(props) => props.theme.typograpy.headingM.lineHeight};
  font-weight: ${(props) => props.theme.typograpy.headingM.fontWeight};
  &:hover {
    color: ${(props) => props.theme.button.secondary.hoverColor};
    background: ${(props) => props.theme.button.secondary.hoverBackGround};
  }
`;
export const NewButton = styled.button`
  width: 100%;
  border-radius: 20px;
  height: 40px;
  border: none;
  color: ${(props) => props.theme.button.primary.color};
  background: ${(props) => props.theme.button.primary.background};
  font-size: ${(props) => props.theme.typograpy.headingM.fontSize};
  line-height: ${(props) => props.theme.typograpy.headingM.lineHeight};
  font-weight: ${(props) => props.theme.typograpy.headingM.fontWeight};
  &:hover {
    color: ${(props) => props.theme.button.primary.hoverColor};
    background: ${(props) => props.theme.button.primary.hoverBackGround};
  }
`;

export const DropdownContainer = styled.div`
  position: relative;
  margin-bottom:24px;
  display:block;
`;

export const DropdownHeader = styled.div<{ isOpen: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.modalInput};
  background: ${(props) => props.theme.modalInputBg};
  font-family: ${(props) => props.theme.typograpy.headingL.fontFamily};
  width: calc(100% - 32px);
  padding: 7px 16px 8px 16px;
  border: ${(props) =>
    props.isOpen
      ? "1px solid " + props.theme.colors.mainPurpole
      : "1px solid rgba(130, 143, 163, 0.25)"};
  line-height: ${(props) => props.theme.typograpy.headingL.lineHeight};
  border-radius: 4px;
  font-size: ${(props) => props.theme.typograpy.bodyM.fontSize};
  cursor: pointer;
`;

export const DropdownList = styled.ul`
  position: absolute;
  top: calc(100% + 5px);
  left: 0;
  z-index: 10;
  width: 100%;
  height: auto;
  max-height: 150px;
  color: ${(props) => props.theme.colors.mediumGray};
  overflow-y: scroll;
  background: ${(props) => props.theme.dropDownBg};
  padding: 0;
  font-size: ${(props) => props.theme.typograpy.bodyM.fontSize};
  margin: 0;
  list-style: none;
  margin-bottom: 24px;
  box-shadow: 0px 10px 20px rgba(54, 78, 126, 0.25);
  border-radius: 8px;
`;

export const DropdownItem = styled.li`
  padding: 10px 16px;
  cursor: pointer;
  background: ${(props) => props.theme.dropDownBg};
  &:hover {
    // background-color: #f2f2f2;
  }
`;
