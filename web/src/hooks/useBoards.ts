import { useDispatch, useSelector } from "react-redux";

import boardService from "../services/boardService";
import { BoardState, setBoard, setBoards, setTaskAction } from "../store/board";
import { iBoard, iCreateBoard } from "../interfaces/board";
import { iCreateTask, iTask } from "../interfaces/tasks";
import taskService from "../services/taskService";

export const useBoards = () => {
  const dispatch = useDispatch();
  const { board = { id: 0, name: "", columns: [] } }: Partial<BoardState> =
    useSelector((state: any) => state.board);

  const getBoards = async () => {
    return boardService
      .getBoards()
      .then((rs) => {
    
        //todo process validation
        dispatch(setBoards({ boards: rs }));
      })
  };

  const addNewBoard = async (board: iCreateBoard) => {
    return boardService
      .addBoard(board)
      .then((rs) => {
        return boardService.getBoards();
      })
      .then((rs) => {
        dispatch(setBoards({ boards: rs }));
        return { success: true };
      })
      .catch((e) => {
        return { success: false, messege: "Creating failed" };
      });
  };
  const pickAndSetBoard = async (board: iBoard) => {
    dispatch(setBoard({ board }));
  };

  const editBoard = async (board: iBoard) => {
    return boardService
      .editBoard(board)
      .then((rs) => {
        return boardService.getBoards();
      })
      .then((rs) => {
        const updatedBoard: iBoard = rs.find((b: any) => b.id === board.id);
        dispatch(setBoards({ boards: rs }));
        dispatch(setBoard({ board: updatedBoard }));
        return { success: true };
      })
      .catch((e) => {
        return { success: false, messege: "editing failed" };
      });
  };
  const addTask = async (task: iCreateTask) => {
    return taskService
      .createTask(task)
      .then((rs) => {
        return boardService.getBoards();
      })
      .then((rs) => {
        const updatedBoard: iBoard = rs.find((b: any) => b.id === task.boardId);
        dispatch(setBoards({ boards: rs }));
        dispatch(setBoard({ board: updatedBoard }));
        return { success: true };
      })
      .catch((e) => {
        return { success: false, messege: "Creating failed" };
      });
  };
  const editTaskStatus = async (newTask: Partial<iTask>) => {
    return taskService
      .editSubTask(newTask)
      .then((updatedTask: iTask) => {
        dispatch(setTaskAction({ task: updatedTask }));
        return boardService.getBoards();
      })
      .then((rs) => {
        const updatedBoard: iBoard = rs.find((b: any) => b.id === board.id);
        dispatch(setBoards({ boards: rs }));
        dispatch(setBoard({ board: updatedBoard }));
        return { success: true };
      })
      .catch((e) => {
        return { success: false, messege: "Creating failed" };
      });
  };
  const setTask = async (task: iTask) => {
    dispatch(setTaskAction({ task }));
  };
  const editTaskColumn = async (newTask: Partial<iTask>) => {
    return taskService
      .editColumn(newTask)
      .then((updatedTask: iTask) => {
        dispatch(setTaskAction({ task: updatedTask }));
        return boardService.getBoards();
      })
      .then((rs) => {
        const updatedBoard: iBoard = rs.find((b: any) => b.id === board.id);
        dispatch(setBoards({ boards: rs }));
        dispatch(setBoard({ board: updatedBoard }));
        return { success: true };
      })
      .catch((e) => {
        return { success: false, messege: "Creating failed" };
      });
  };
  const updateTask = async (newTask: iTask) => {
    return taskService
      .updateTask(newTask)
      .then((updatedTask: iTask) => {
        // dispatch(setTaskAction({ task: updatedTask }));
        return boardService.getBoards();
      })
      .then((rs) => {
        const updatedBoard: iBoard = rs.find((b: any) => b.id === board.id);
        dispatch(setBoards({ boards: rs }));
        dispatch(setBoard({ board: updatedBoard }));
        return { success: true };
      })
      .catch((e) => {
        return { success: false, messege: "Creating failed" };
      });
  };
  const deletBoard = async (id: number) => {
    return boardService
      .deletBoard(id)
      .then(() => {
        return boardService.getBoards();
      })
      .then((rs) => {
        dispatch(setBoards({ boards: rs }));
        const updatedBoard: iBoard = rs[0];
        dispatch(setBoard({ board: updatedBoard }));
        return { success: true };
      })
      .catch((e) => {
        return { success: false, messege: "Deleting  failed" };
      });
  };
  const deleteTask = async (task: iTask) => {
    return taskService
      .deleteTask(task)
      .then((rs) => {
        return boardService.getBoards();
      })
      .then((rs) => {
        const updatedBoard: iBoard = rs.find((b: any) => b.id === task.boardId);
        dispatch(setBoards({ boards: rs }));
        dispatch(setBoard({ board: updatedBoard }));
        return { success: true };
      })
      .catch((e) => {
        return { success: false, messege: "Creating failed" };
      });
  };
  return {
    getBoards,
    addNewBoard,
    pickAndSetBoard,
    editBoard,
    addTask,
    editTaskStatus,
    setTask,
    editTaskColumn,
    updateTask,
    deletBoard,
    deleteTask
  };
};
