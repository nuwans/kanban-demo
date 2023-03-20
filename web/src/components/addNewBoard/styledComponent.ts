import styled from "styled-components";

export const Header = styled.div`
  color: ${(props) => props.theme.modalInput};
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
  margin-bottom: 24px;
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
