import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import SearchBox from "../components/SearchBox";

test("Search should render", () => {
  render(<SearchBox />);
  expect(screen.getByTestId("search"));
});

test("Search Input should render", () => {
  render(<SearchBox />);
  const button = screen.getByTestId("searchinput");
  fireEvent.change(button, { target: { value: "Electronics" } });
});
