import React from "react";
import * as reactRedux from "react-redux";
import { render, screen } from "@testing-library/react";
import App from "../App";
import Router from "react-router-dom";
import NavBarComps from "../components/Navbar";

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

describe("NavBar", () => {
  const useDispatchMock = jest.spyOn(reactRedux, "useDispatch");
  const useSelectorMock = jest.spyOn(reactRedux, "useSelector");

  beforeEach(() => {
    useDispatchMock.mockClear();
    useSelectorMock.mockClear();
  });

  const mockState = {
    cartItems: [],
  };

  it("should render NavBar component", async () => {
    useSelectorMock.mockReturnValue(mockState);
    const dispatch = jest.fn();
    useDispatchMock.mockReturnValue(dispatch);
    render(
      <App>
        <Router>
          <NavBarComps />
        </Router>
      </App>
    );
    expect(screen.getByTestId("navbar"));
  });
});
