import styled from "styled-components";

export const RootLayout = styled.div`
  font-family: Plus Jakarta Sans;
  overflow: scrol;
  font-style: normal;
  font-weight: 500;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.secondaryColor};
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
`;
export const Header = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  @media screen and (max-width: ${(props) => props.theme.breackPoints.tab}) {
    height: 80px;
  }
  @media screen and (max-width: ${(props) => props.theme.breackPoints.mobile}) {
    height: 64px;
  } ;
`;
export const HeaderLeft = styled.div`
  width: 300px;
  height: 100%;
  border-right: 1px solid ${(props) => props.theme.borderColor};
  display: flex;
  @media screen and (max-width: ${(props) => props.theme.breackPoints.tab}) {
    width: 260px;
  }
  @media screen and (max-width: ${(props) => props.theme.breackPoints.mobile}) {
    width: 50px;
  } ;
`;

export const LogoWrapper = styled.div`
  //width: 100%;
  display: flex;
  margin-left: 26px;
  padding-top: 32px;
  @media screen and (max-width: ${(props) => props.theme.breackPoints.mobile}) {
    margin-left: 16px;
    padding-top: 20px;
  } ;
`;

export const LogoImage = styled.div`
  //width: 24px;
`;

export const LogoContent = styled.div`
  margin-left: 15px;
  @media screen and (max-width: ${(props) => props.theme.breackPoints.mobile}) {
    display: none;
  } ;
`;

export const LayoutWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  background: ${(props) => props.theme.background};
  //max-width: 100%;
  //overflow:scroll;
  height: auto;
  @media screen and (max-width: ${(props) => props.theme.breackPoints.tab}) {
    height: calc(100% - 80px);
  }
  @media screen and (max-width: ${(props) => props.theme.breackPoints.mobile}) {
    height: calc(100% - 64px);
  }
`;

export const ContentWrapper = styled.div<{ show: boolean }>`
  background: ${(props) => props.theme.background};

  border-top: 1px solid ${(props) => props.theme.borderColor};
  color: ${(props) => props.theme.secondaryColor};
  width: ${(props) => (props.show ? "calc(100% - 300px)" : "100%")};
  @media screen and (max-width: ${(props) => props.theme.breackPoints.tab}) {
    width: ${(props) => (props.show ? "calc(100% - 260px)" : "100%")};
  }
  @media screen and (max-width: ${(props) => props.theme.breackPoints.mobile}) {
    width: 100%;
  }
`;

export const Content = styled.div`
  height: 100%;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.secondaryColor};
  @media screen and (max-width: ${(props) => props.theme.breackPoints.tab}) {
    height: calc(100%);
  }
  @media screen and (max-width: ${(props) => props.theme.breackPoints.mobile}) {
    height: calc(100%);
  } ;
`;

export const VisibleIconWrapper = styled.div`
  background: ${(props) => props.theme.colors.mainPurpole};
  position: fixed;
  bottom: 100px;
  left: 10px;
  width: 56px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0 100px 100px 0;
`;
