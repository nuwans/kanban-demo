import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, screen} from "@testing-library/react";
import Header from "../index";
import { Provider } from "react-redux";
import { iBoard } from "../../../interfaces/board";
import store from "../../../store";
import { darkTheme } from "../../../theme/dark";
import { ThemeProvider } from "styled-components";
const board: iBoard = {
  name: "Header Testing",
  id: 1,
  columns: [],
};

let editBoardModelShow = false;
let addBoardModelShow = false;
const editBoardAction = () => {
  editBoardModelShow = true;
};
const setTackModelAction = () => {
  addBoardModelShow = true;
};
const Mock = () => {
  return (
    <Provider store={store}>
       <ThemeProvider theme={darkTheme}>
       <BrowserRouter>
      <Header
        board={board}
        editBoard={editBoardAction}
        setAddTaskModalVisible={setTackModelAction}
      />
      </BrowserRouter>
       </ThemeProvider>
    </Provider>
  );
};

describe('Testing Header component',()=>{
  test(`Header name shuld be the board name that we are passing as a input
  (${board.name})` , () => {
    render(<Mock/>);
    const headerName = screen.getByText(board.name);
    expect(headerName).toBeInTheDocument();

  });

  test(`Header Shuld have "Add New Task" Button` , () => {
    render(<Mock/>);
    const addNewTaskButton = screen.getByText(/Add New Task/i);
    expect(addNewTaskButton).toBeInTheDocument();

  });
})

