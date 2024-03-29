import styled from "styled-components";

export const Wrapper = styled.div<{show:boolean}>`
  max-height:100%;
  padding-top: 15px;
  border-right:1px solid ${(props)=>props.theme.borderColor};
  width: ${(props) => (props.show ?'300px': '0px')};
  display: ${({ show }) => show ? 'flex' : 'none'};
  flex-direction:column;
  @media screen and (max-width: ${(props) => props.theme.breackPoints.tab}) {
    width: ${(props) => (props.show ?'260px': '0px')};
  }
  @media screen and (max-width: ${(props) => props.theme.breackPoints.mobile}) {
    display: none;
  } ;
`;

export const BoardWrapper = styled.div`
  max-height:80%;
  overflow:scrol;
  flex:1;
`;
export const BoardHeader = styled.div`
  margin: 0;
  padding-left: 32px;
  text-transform: uppercase;
  margin-bottom:19px;
  color: ${(props) => props.theme.colors.mediumGray};
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
  width: 276px;
  @media screen and (max-width: ${(props) => props.theme.breackPoints.tab}) {
    width: 240px;
  }
  &:hover {
    background: ${(props) => props.theme.colors.mainPurpole};
    color: ${(props) => props.theme.colors.white};
  }
`;
export const IconWrapper = styled.div`
  margin: 4px 16px 0 32px;
`;
export const Name = styled.div`
  display: block;
  text-transform: capitalize;
  font-size: ${(props) => props.theme.typograpy.headingM.fontSize};
  line-height: ${(props) => props.theme.typograpy.headingM.lineHeight};
  font-weight: ${(props) => props.theme.typograpy.headingM.fontWeight};
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
export const ToggleContent = styled.div`
  margin-left: 15px;
  color: ${(props) => props.theme.colors.mediumGray};
  font-size: ${(props) => props.theme.typograpy.headingM.fontSize};
  line-height: ${(props) => props.theme.typograpy.headingM.lineHeight};
  font-weight: ${(props) => props.theme.typograpy.headingM.fontWeight};
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
export const AddNewContent = styled.div`
  display: block;
  text-transform: capitalize;
  font-size: ${(props) => props.theme.typograpy.headingM.fontSize};
  line-height: ${(props) => props.theme.typograpy.headingM.lineHeight};
  font-weight: ${(props) => props.theme.typograpy.headingM.fontWeight};
`;