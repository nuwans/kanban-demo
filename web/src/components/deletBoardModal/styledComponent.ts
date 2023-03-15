import styled from "styled-components";

export const Header = styled.div`
  color: ${(props) => props.theme.colors.red};
  margin-bottom: 24px;
  font-size: ${(props) => props.theme.typograpy.headingL.fontSize};
  line-height: ${(props) => props.theme.typograpy.headingL.lineHeight};
  font-weight: ${(props) => props.theme.typograpy.headingL.fontWeight};
`;

export const Content = styled.div`
  color: ${(props) => props.theme.colors.mediumGray};
  margin-bottom: 32px;
  font-size: ${(props) => props.theme.typograpy.bodyL.fontSize};
  line-height: ${(props) => props.theme.typograpy.bodyL.lineHeight};
  font-weight: ${(props) => props.theme.typograpy.bodyL.fontWeight};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  margin-bottom: 40px;
  justify-content: space-between;
  font-size: ${(props) => props.theme.typograpy.bodyL.fontSize};
  line-height: ${(props) => props.theme.typograpy.bodyL.lineHeight};
  font-weight: ${(props) => props.theme.typograpy.headingM.fontWeight};
  @media screen and (max-width: ${(props) => props.theme.breackPoints.mobile}) {
    flex-direction: column;
  } ;
`;
export const ButtonDanger = styled.button`
  color: ${(props) => props.theme.colors.white};
  background: ${(props) => props.theme.colors.red};
  width: 200px;

  border-radius: 20px;
  height: 40px;
  border: none;
  @media screen and (max-width: ${(props) => props.theme.breackPoints.mobile}) {
    width: 100%;
    margin-bottom:16px;
  }
  &:hover {
    background: ${(props) => props.theme.colors.hoverRed};
  }
`;
export const ButtonCancel = styled.button`
  width: 200px;
  border-radius: 20px;
  height: 40px;
  border: none;
  color: ${(props) => props.theme.button.secondary.color};
  background: ${(props) => props.theme.button.secondary.background};
  &:hover {
    background: ${(props) => props.theme.button.secondary.hoverBackGround};
  }
  @media screen and (max-width: ${(props) => props.theme.breackPoints.mobile}) {
    width: 100%;
  } ;
`;
