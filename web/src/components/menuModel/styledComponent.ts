

import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalWrap = styled.div`
  background-color:${(props) => props.theme.modalBg};
  width: 264px;
  min-height:400px;
  margin-top:-110px;
  //overflow-y:scroll;
  border-radius: 6px;
 
`;

export const ContentWrapper = styled.div`
  margin: 16px 0 0 0;
  display:flex;
  flex-direction:column;
  @media screen and (max-width: ${(props) => props.theme.breackPoints.mobile}) {
    //width: 343px;
  } ;
`;
export const Footer = styled.div`
  display:block;
  height:10px;

`;

export const BoardWrapper = styled.div`
  overflow:scrol;
  flex:1;
`;
export const BoardHeader = styled.div`
  margin: 0;
  padding-left: 24px;
  text-transform: uppercase;
  margin-bottom:19px;
  color: ${(props) => props.theme.colors.mediumGray};
  font-size: ${(props) => props.theme.typograpy.headingM.fontSize};
  line-height: ${(props) => props.theme.typograpy.headingM.lineHeight};
  font-weight: ${(props) => props.theme.typograpy.headingM.fontWeight};
`;
export const AddNewContent = styled.div`
  display: block;
  text-transform: capitalize;
  font-size: ${(props) => props.theme.typograpy.headingM.fontSize};
  line-height: ${(props) => props.theme.typograpy.headingM.lineHeight};
  font-weight: ${(props) => props.theme.typograpy.headingM.fontWeight};
`;
export const IconWrapper = styled.div`
  margin: 4px 12px 0 24px;
`;
export const ItemWrapperNew = styled.div`
  display: flex;
  color: ${(props) => props.theme.colors.mainPurpole};
  border-radius: 0 100px 100px 0;
  height: 48px;
  align-items: center;
  width: 276px;
  @media screen and (max-width: ${(props) => props.theme.breackPoints.tab}) {
    width: 240px;
  }
  
`;
export const Name = styled.div`
  display: block;
  text-transform: capitalize;
  font-size: ${(props) => props.theme.typograpy.headingM.fontSize};
  line-height: ${(props) => props.theme.typograpy.headingM.lineHeight};
  font-weight: ${(props) => props.theme.typograpy.headingM.fontWeight};
`;
export const ItemWrapper = styled.div<{selected:boolean}>`
  display: flex;
  color: ${(props) => (props.selected ?props.theme.colors.white: props.theme.colors.mediumGray)};
  background: ${(props) => (props.selected ?props.theme.colors.mainPurpole: props.theme.background)};
  border-radius: 0 100px 100px 0;
  height: 48px;
  align-items: center;
  width: 240px;
  &:hover {
    background: ${(props) => props.theme.colors.mainPurpole};
    color: ${(props) => props.theme.colors.white};
  }
`;


export const SwitchWrapper = styled.div`
  width: 250px;
  height: 48px;
  background: ${(props) => props.theme.theameSwitcherBg};
  @media screen and (max-width: ${(props) => props.theme.breackPoints.tab}) {
    width: 235px;
  }
  margin: auto auto 0px auto;
  display: flex;
  align-items: center;
  text-align: center;
`;
export const ImageWrapper = styled.div`
  width: 20px;
`;
export const ToggleWrapper = styled.div`
  display: flex;
  margin:22px auto 47px 22px;
`;