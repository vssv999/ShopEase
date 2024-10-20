import React from "react";
import * as reactRedux from "react-redux";
import { render, screen } from "@testing-library/react";
import App from "../App";
import HomeScreen from "../screens/HomeScreen";
import Router from "react-router-dom";

// target window error resolved
window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };

//Home Screen Rendering
describe("HomeScreen", () => {
  const useDispatchMock = jest.spyOn(reactRedux, "useDispatch");
  const useSelectorMock = jest.spyOn(reactRedux, "useSelector");

  beforeEach(() => {
    useDispatchMock.mockClear();
    useSelectorMock.mockClear();
  });

  const mockState = {
    products: [],
  };

  it("should render HomeScreen component", async () => {
    useSelectorMock.mockReturnValue(mockState);
    const dispatch = jest.fn();
    useDispatchMock.mockReturnValue(dispatch);

    render(
      <App>
        <Router>
          <HomeScreen />
        </Router>
      </App>
    );
    expect(screen.getByTestId("homescreen"));
    expect(screen.getByText("Sort by:"));
  });
});
