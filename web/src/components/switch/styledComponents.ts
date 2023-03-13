import styled from "styled-components";

export const SwitchWrapper = styled.label`
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
  margin: 0 20px;
`;

export const SwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

export const SwitchSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  border-radius: 12px;
  transition: 0.4s;

  &::before {
    position: absolute;
    content: "";
    height: 15px;
    width: 15px;
    left: 3px;
    bottom: 3px;
    border-radius: 10px;
    background-color: white;
    transition: 0.4s;
  }

  ${SwitchInput}:checked + & {
    background-color: ${(props) => props.theme.colors.mainPurpole};
  }

  ${SwitchInput}:focus + & {
    box-shadow: 0 0 1px #2196f3;
  }

  ${SwitchInput}:checked + &::before {
    transform: translateX(19px);
  }
`;
