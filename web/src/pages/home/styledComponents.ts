import styled from "styled-components";

export const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background: ${props => props.theme.background};
  color: ${props => props.theme.secondaryColor};
`;
