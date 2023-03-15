import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("Should return Layout component", () => {
  render(<App />);
  const layoutWrapper = screen.getByTestId('root-layout');
  expect(layoutWrapper).toBeInTheDocument();
 
 
});

test('Sholud show All Boards Text In Side Bar',()=>{
  render(<App />);
  const layoutWrapper = screen.getByText(/All Boards /i);
  expect(layoutWrapper).toBeInTheDocument();

})
