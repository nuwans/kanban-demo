
import { BoardHeader, BoardWrapper, Wrapper } from "./styledComponents";
import SideBarItem from "./sidebarItem";
import SwitchContainer from "./switchContainer";
import SideBarToggle from "./sidebarToggle";
import { ThemeEnum } from "../../interfaces/enums";
import { useGlobalConfig } from "../../hooks/useGlobalConfig";
import { GlobalState } from "../../store/global";
import { useSelector } from "react-redux";
import { iBoard } from "../../interfaces/board";
import SideBarItemNew from "./sidebarItemNew";
interface Props {
  show: boolean;
  boards:iBoard[];
  setVisible: () => void;
  addNew: () => void;
  selectItem:(id:number)=>void;
  selectedItem:number;
}
const SideBar = ({ show, setVisible,boards,addNew ,selectItem,selectedItem}: Props) => {

  const { theme = ThemeEnum.LIGHT }: Partial<GlobalState> = useSelector(
    (state: any) => state.global
  );
  const { changeTheme } = useGlobalConfig();
  const changeThemeName = (val: boolean) => {
    if (val) {
      changeTheme(ThemeEnum.LIGHT);
    } else {
      changeTheme(ThemeEnum.DARK);
    }
  };
  return (
    <Wrapper show={show}>
      <BoardWrapper>
        <BoardHeader>All Boards ({boards.length})</BoardHeader>
        {boards.map((board, i) => {
          return <SideBarItem selectedItem={selectedItem} onClick={selectItem}  key={i} {...board} />;
        })}
       <SideBarItemNew key={-1} name={"+ Create New Board "} onClick={addNew}></SideBarItemNew>
      </BoardWrapper>
      {show && (
        <SwitchContainer
          theme={theme}
          onChange={changeThemeName}
        ></SwitchContainer>
      )}
      <SideBarToggle onClick={setVisible}></SideBarToggle>
    </Wrapper>
  );
};
export default SideBar;
