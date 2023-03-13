import styled from "styled-components";

export const BoardWrapper = styled.div`
  height: 100%;
  display: flex;
  overflow: scroll;
  flex-direction: row;
  background-color: ${(props) => props.theme.boardBg};
`;
export const EmptyBoardWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.boardBg};
  align-items: center;
  justify-content: center;
`;
export const AddNewContent = styled.div`
  font-size: ${(props) => props.theme.typograpy.headingL.fontSize};
  line-height: ${(props) => props.theme.typograpy.headingL.lineHeight};
  font-weight: ${(props) => props.theme.typograpy.headingL.fontWeight};
  color: ${(props) => props.theme.colors.mediumGray};
`;
export const AddNewColumnButtonWrapper = styled.div`
  margin-top: 34px;
  height: 48px;
`;
export const AddNewColumnButton = styled.button`
  width: 174px;
  border-radius: 24px;
  height: 48px;
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

export const Column = styled.div`
  width: 280px;
  margin-left: 24px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
`;
export const NewColumn = styled.div`
  width: 280px;
  margin-left: 24px;
  margin-top: 64px;
  margin-right: 24px;
  flex-shrink: 0;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.newColumnGradient};
  border-radius: 6px;
`;
export const ColoumnName = styled.div`
  text-transform: uppercase;
  display: flex;
  margin: 24px 0px;
  color: ${(props) => props.theme.colors.mediumGray};
  font-size: ${(props) => props.theme.typograpy.headingS.fontSize};
  line-height: ${(props) => props.theme.typograpy.headingS.lineHeight};
  font-weight: ${(props) => props.theme.typograpy.headingS.fontWeight};
`;
export const ColoumnNameIcon = styled.div<{ color: string }>`
  background-color: ${(props) => props.color};
  width: 12px;
  height: 12px;
  display: block;
  border-radius: 6px;
  margin-right: 12px;
`;
export const TaskCard = styled.div`
  //min-height:88px;
  background: ${(props) => props.theme.task.background};
  margin-bottom: 20px;
  padding: 23px 16px;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(54, 78, 126, 0.101545);
`;
export const TaskName = styled.div`
  color: ${(props) => props.theme.task.color};
  font-size: ${(props) => props.theme.typograpy.headingM.fontSize};
  line-height: ${(props) => props.theme.typograpy.headingM.lineHeight};
  font-weight: ${(props) => props.theme.typograpy.headingM.fontWeight};
  margin-bottom: 8px;
`;

export const TaskSubHeader = styled.div`
  color: ${(props) => props.theme.task.subHeading};
  font-size: ${(props) => props.theme.typograpy.bodyM.fontSize};
  line-height: ${(props) => props.theme.typograpy.bodyM.lineHeight};
  font-weight: ${(props) => props.theme.typograpy.bodyM.fontWeight};
`;
