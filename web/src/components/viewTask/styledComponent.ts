import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${(props) => props.theme.primaryContent};
  margin-bottom: 24px;
  font-size: ${(props) => props.theme.typograpy.headingL.fontSize};
  line-height: ${(props) => props.theme.typograpy.headingL.lineHeight};
  font-weight: ${(props) => props.theme.typograpy.headingL.fontWeight};
`;
export const ButtonCorner = styled.div``;
export const Label = styled.div`
  color: ${(props) => props.theme.modalLabel};
  font-size: ${(props) => props.theme.typograpy.bodyM.fontSize};
  line-height: ${(props) => props.theme.typograpy.bodyM.lineHeight};
  font-weight: ${(props) => props.theme.typograpy.bodyM.fontWeight};
  margin-bottom: 8px;
  margin-top: 24px;
`;
export const Description = styled.div`
  color: ${(props) => props.theme.modalLabel};
  font-size: ${(props) => props.theme.typograpy.bodyL.fontSize};
  font-weight: ${(props) => props.theme.typograpy.bodyL.fontWeight};
  line-height: ${(props) => props.theme.typograpy.bodyL.lineHeight};
  margin-bottom: 8px;
  margin-top: 24px;
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
  background-color: ${(props) => props.theme.boardBg};
  margin-bottom: 8px;
  border-radius: 4px;
  &:hover {
    background-color: #635fc740;
  }
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
  //disply:none;
  left: 0;
  z-index: 10;
  width: 100%;
  height: auto;
  max-height: 120px;
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

export const TaskWrapper = styled.div<{ status: boolean }>`
  align-items: center;
  color: ${(props) => props.theme.task.color};
  padding: 13px 12px;
  display: flex;
  font-size: ${(props) => props.theme.typograpy.bodyM.fontSize};
  line-height: ${(props) => props.theme.typograpy.bodyM.lineHeight};
  font-weight: ${(props) => props.theme.typograpy.bodyM.fontWeight};
`;

export const TaskName = styled.div<{ status: boolean }>`
  opacity: ${(props) => (props.status ? "25%" : "100%")};
  text-decoration-line: ${(props) => (props.status ? "line-through" : "none")};
`;

export const CheckboxLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 16px;
  height: 16px;
  margin-right: 16px;
`;

export const CheckboxInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;

export const CheckboxCheckmark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 16px;
  width: 16px;
  border: 1px solid rgba(130, 143, 163, 0.25);
  border-radius: 2px;
  background-color: ${(props) => props.theme.task.background};
`;

export const CustomCheckbox = styled.div`
  ${CheckboxLabel}:hover ${CheckboxCheckmark} {
  }

  ${CheckboxInput}:checked ~ ${CheckboxCheckmark} {
    background-color: ${(props) => props.theme.colors.mainPurpole};
  }

  ${CheckboxCheckmark}:after {
    content: "";
    position: absolute;
    display: none;
  }

  ${CheckboxInput}:checked ~ ${CheckboxCheckmark}:after {
    display: block;
  }

  ${CheckboxCheckmark}:after {
    left: 4px;
    top: 2px;
    width: 4px;
    height: 6px;
    border: solid white;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
  }
`;
export const OptionDropDownContainer = styled.div`
  position: relative;
`;

export const OptionDropdownHeader = styled.div`
  display: flex;
`;
export const OptionDropdownList = styled.ul`
  position: absolute;
  z-index: 10;
  width: 192px;
  height: auto;
  max-height: 100px;
  top: 30px;
  left: -55px;
  background: ${(props) => props.theme.modalInputBg};
  border-radius: 5px;
  padding: 0;
  font-size: ${(props) => props.theme.typograpy.bodyM.fontSize};
  line-height: ${(props) => props.theme.typograpy.bodyM.lineHeight};
  font-weight: ${(props) => props.theme.typograpy.bodyM.fontWeight};
  margin: 0;
  list-style: none;
  margin-bottom: 24px;
`;

export const OptionDropdownItem = styled.li<{ color?: string }>`
  padding: 10px;
  cursor: pointer;
  color: ${(props) => (props.color ? "red" : props.theme.colors.mediumGray)};
  &:hover {
    // background-color: #f2f2f2;
  }
`;
