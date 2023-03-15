import SideBar from "../sidebar";
import Image from "../../config/images";
import {
  Content,
  ContentWrapper,
  Header,
  HeaderLeft,
  LayoutWrapper,
  LogoContent,
  LogoImage,
  LogoWrapper,
  RootLayout,
  VisibleIconWrapper,
} from "./styledComponents";
import { useEffect, useState } from "react";
import HeaderComp from "../header";
import { useBoards } from "../../hooks/useBoards";
import { BoardState } from "../../store/board";
import { useSelector } from "react-redux";
import AddBoardModal from "../addNewBoard";
import { iBoard, iCreateBoard } from "../../interfaces/board";
import Board from "../board";
import EditBoardModal from "../editBoard";
import AddTaskModal from "../addNewTask";
import { iCreateTask, iTask } from "../../interfaces/tasks";
import EditTaskModal from "../editTask";
import ViewTaskModal from "../viewTask";
import { GlobalState } from "../../store/global";
import { ThemeEnum } from "../../interfaces/enums";
import MenuModel from "../menuModel";
interface Props {
  children?: any;
}
const Layout = ({ children }: Props) => {
  const {
    getBoards,
    addNewBoard,
    pickAndSetBoard,
    editBoard,
    addTask,
    setTask,
  } = useBoards();

  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [showAddBoard, setShowAddBoard] = useState<boolean>(false);
  const [editBoardVisible, setEditBoardVisible] = useState<boolean>(false);
  const [showSideBar, setSideBarVisibility] = useState<boolean>(true);
  const [showAddTask, setAddTaskVisibility] = useState<boolean>(false);
  const [showEditTask, setEditTaskVisibility] = useState<boolean>(false);
  const [viewTaskVisible, setViewTaskVisibility] = useState<boolean>(false);
  useEffect(() => {
    getBoards();
  }, []);
  const {
    boards = [],
    board = { id: 0, name: "", columns: [] },
    task = null,
  }: Partial<BoardState> = useSelector((state: any) => state.board);
  const { theme }: Partial<GlobalState> = useSelector(
    (state: any) => state.global
  );
  const toggleSideBar = () => {
    setSideBarVisibility(!showSideBar);
  };
  const showAddNewBoard = () => {
    setShowAddBoard(true);
  };
  const addBoard = (board: iCreateBoard) => {
    addNewBoard(board).then((r) => {
      if (r.success) {
        setShowAddBoard(false);
      }
    });
  };

  const pickBoard = (id: number) => {
    let board = boards.find((b) => b.id === id);
    if (board) {
      pickAndSetBoard(board);
    }
  };
  const addColumn = () => {
    setEditBoardVisible(true);
  };
  const editBoardCallBack = (newBoard: iBoard) => {
    editBoard(newBoard).then((r) => {
      if (r.success) {
        setEditBoardVisible(false);
      }
    });
  };
  const createTask = (task: iCreateTask) => {
    addTask(task).then((d) => {
      if (d.success) {
        setAddTaskVisibility(false);
      }
    });
  };
  const editTaskStart = (task: iTask) => {
    setViewTaskVisibility(false);
    setEditTaskVisibility(true);
    setTask(task);
  };
  const openTaskView = (task: iTask) => {
    setViewTaskVisibility(true);
    setTask(task);
  };

  const [windowSize, setWindowSize] = useState<{
    width: number;
    height: number;
  }>({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    const handleWindowResize = () => {
      const { innerWidth, innerHeight } = window;
      setWindowSize({ width: innerWidth, height: innerHeight });
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <RootLayout>
      <Header>
        <HeaderLeft>
          <LogoWrapper>
            <LogoImage
              onClick={() => {
                if (windowSize.width < 376) {
                  setShowMenu(!showMenu);
                }
              }}
            >
              <Image icon="logo"></Image>
            </LogoImage>
            {showMenu && (
              <MenuModel
                onClose={() => {
                  setShowMenu(false);
                }}
                isOpen={showMenu}
                addNew={showAddNewBoard}
              />
            )}

            <LogoContent>
              <Image
                icon={theme === ThemeEnum.LIGHT ? "name-light" : "name-dark"}
              ></Image>
            </LogoContent>
          </LogoWrapper>
        </HeaderLeft>
        <HeaderComp
          setAddTaskModalVisible={() => setAddTaskVisibility(true)}
          board={board}
          editBoard={addColumn}
        />
      </Header>
      <LayoutWrapper>
        <SideBar
          selectedItem={board.id}
          selectItem={pickBoard}
          addNew={showAddNewBoard}
          boards={boards}
          show={showSideBar}
          setVisible={toggleSideBar}
        />
        <ContentWrapper show={showSideBar}>
          <Content>
            {showAddBoard && (
              <AddBoardModal
                addBoard={addBoard}
                isOpen={showAddBoard}
                onClose={() => setShowAddBoard(false)}
              />
            )}
            {board.id !== 0 && (
              <Board
                openTask={openTaskView}
                addColumn={addColumn}
                board={board}
              />
            )}
            {board.id !== 0 && editBoardVisible && (
              <EditBoardModal
                onClose={() => setEditBoardVisible(false)}
                isOpen={editBoardVisible}
                board={board}
                editBoard={editBoardCallBack}
              />
            )}
            {board.id !== 0 && showAddTask && board.columns.length > 0 && (
              <AddTaskModal
                addTask={createTask}
                onClose={() => setAddTaskVisibility(false)}
                isOpen={showAddTask}
                board={board}
              />
            )}
            {board.id !== 0 &&
              showEditTask &&
              board.columns.length > 0 &&
              task && (
                <EditTaskModal
                  onClose={() => setEditTaskVisibility(false)}
                  task={task}
                  isOpen={showEditTask}
                  board={board}
                />
              )}
            {board.id !== 0 &&
              viewTaskVisible &&
              board.columns.length > 0 &&
              task && (
                <ViewTaskModal
                  editTask={editTaskStart}
                  onClose={() => setViewTaskVisibility(false)}
                  task={task}
                  isOpen={viewTaskVisible}
                  board={board}
                />
              )}
          </Content>
        </ContentWrapper>
      </LayoutWrapper>
      {!showSideBar && (
        <VisibleIconWrapper onClick={toggleSideBar}>
          <Image icon="eye"></Image>
        </VisibleIconWrapper>
      )}
    </RootLayout>
  );
};
export default Layout;
