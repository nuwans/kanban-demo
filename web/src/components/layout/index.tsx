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
interface Props {
  children?: any;
}
const Layout = ({ children }: Props) => {
  const { getBoards, addNewBoard, pickAndSetBoard, editBoard, addTask,setTask } =
    useBoards();
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
  const toggleSideBar = () => {
    setSideBarVisibility(!showSideBar);
  };
  const showAddNewBoard = () => {
    setShowAddBoard(true);
  };
  const addBoard = (board: iCreateBoard) => {
    addNewBoard(board);
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
    editBoard(newBoard);
  };
  const createTask = (task: iCreateTask) => {
    addTask(task).then((d) => {
      if (d.success) {
        setAddTaskVisibility(false);
      }
    });
  };
  const editTaskStart = (task: iTask) => {
    setViewTaskVisibility(false)
    setEditTaskVisibility(true);
    setTask(task);
  };
  const openTaskView = (task: iTask) => {
    console.log("opening task", task);
    setViewTaskVisibility(true);
    setTask(task);
  };
  const deleteTask = (task: iTask) => {
    console.log(task);
    //setEditTaskVisibility(true);
    //setTask(task)
  };

  return (
    <RootLayout>
      <Header>
        <HeaderLeft>
          <LogoWrapper>
            <LogoImage>
              <Image icon="logo"></Image>
            </LogoImage>
            <LogoContent>
              <Image icon="name-light"></Image>
            </LogoContent>
          </LogoWrapper>
        </HeaderLeft>
        <HeaderComp
          setAddTaskModalVisible={() => setAddTaskVisibility(true)}
          board={board}
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
                  deleteTask={deleteTask}
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
