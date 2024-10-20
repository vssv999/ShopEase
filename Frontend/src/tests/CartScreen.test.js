import React from "react";
import * as reactRedux from "react-redux";
import { render, screen } from "@testing-library/react";
import Router from "react-router-dom";
import CartScreen from "../screens/CartScreen";
import App from "../App";

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

describe("CartScreen", () => {
  const useDispatchMock = jest.spyOn(reactRedux, "useDispatch");
  const useSelectorMock = jest.spyOn(reactRedux, "useSelector");

  beforeEach(() => {
    useDispatchMock.mockClear();
    useSelectorMock.mockClear();
  });

  const mockState = {
    product: [],
  };

  it("should render CartScreen component", async () => {
    useSelectorMock.mockReturnValue(mockState);
    const dispatch = jest.fn();
    useDispatchMock.mockReturnValue(dispatch);
    render(
      <App>
        <Router>
          <CartScreen />
        </Router>
      </App>
    );
    expect(screen.findAllByText("Home"));
  });
});
