import styled from "styled-components";

export const HeaderRight = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  width: calc(100% - 300px);
  @media screen and (max-width: ${(props) => props.theme.breackPoints.tab}) {
    width: calc(100% - 260px);
  }
  @media screen and (max-width: ${(props) => props.theme.breackPoints.mobile}) {
    width: calc(100% - 50px);
  }
`;
export const BoardName = styled.div`
  color: ${(props) => props.theme.primaryContent};
  font-size: ${(props) => props.theme.typograpy.headingXl.fontSize};
  line-height: ${(props) => props.theme.typograpy.headingXl.lineHeight};
  font-weight: ${(props) => props.theme.typograpy.headingXl.fontWeight};
  @media screen and (max-width: ${(props) => props.theme.breackPoints.tab}) {
    width: calc(100% - 260px);
    font-size: 20px;
    line-height: 25px;
  }
  @media screen and (max-width: ${(props) => props.theme.breackPoints.mobile}) {
    width: calc(100% - 50px);
    font-size: ${(props) => props.theme.typograpy.headingL.fontSize};
    line-height: ${(props) => props.theme.typograpy.headingL.lineHeight};
  }
  margin: auto 24px;
`;
export const ButtonCorner = styled.div`
  display: flex;
  margin: auto 24px;
  align-items:center;
`;
export const ImageWrap = styled.div`
  display: flex;
  //background: white;
  margin: auto;
`;

export const Button = styled.button<{ disabled: boolean }>`
  margin-right: 24px;
  height: 48px;
  width: 164px;
  border: none;
  border-radius: 24px;
  opacity:${(props) => (props.disabled?'25%':'100%')};
  color: ${(props) => props.theme.button.primary.color};
  background: ${(props) => props.theme.button.primary.background};
  font-size: ${(props) => props.theme.typograpy.headingM.fontSize};
  line-height: ${(props) => props.theme.typograpy.headingM.lineHeight};
  font-weight: ${(props) => props.theme.typograpy.headingM.fontWeight};
  &:hover {
    color: ${(props) => props.theme.button.primary.hoverColor};
    background: ${(props) => props.theme.button.primary.hoverBackGround};
  }

  @media screen and (max-width: ${(props) => props.theme.breackPoints.tab}) {
   display:none;
  }
`;

export const ButtonMobile = styled.button<{ disabled: boolean }>`
  margin-right: 16px;
  height: 32px;
  width: 48px;
  border: none;
  border-radius: 24px;
  display:none;
  opacity:${(props) => (props.disabled?'25%':'100%')};
  color: ${(props) => props.theme.button.primary.color};
  background: ${(props) => props.theme.button.primary.background};
  font-size: ${(props) => props.theme.typograpy.headingM.fontSize};
  line-height: ${(props) => props.theme.typograpy.headingM.lineHeight};
  font-weight: ${(props) => props.theme.typograpy.headingM.fontWeight};
  &:hover {
    color: ${(props) => props.theme.button.primary.hoverColor};
    background: ${(props) => props.theme.button.primary.hoverBackGround};
  }
  @media screen and (max-width: ${(props) => props.theme.breackPoints.tab}) {
    display:block;
   }
`;
export const OptionDropdownList = styled.ul`
  position: absolute;
  z-index: 10;
  width: 150px;
  height: auto;
  max-height: 100px;
  top: 30px;
  left: -150px;
  overflow-y: scroll;
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