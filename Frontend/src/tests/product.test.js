import { render, screen } from "@testing-library/react";
import { Router } from "react-router-dom";
import App from "../App";
import Product from "../components/Product";
import FilterScreen from "../screens/FilterScreen";
import * as reactRedux from "react-redux";

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };

describe("Users Component", () => {
  const useDispatchMock = jest.spyOn(reactRedux, "useDispatch");
  const useSelectorMock = jest.spyOn(reactRedux, "useSelector");

  beforeEach(() => {
    useDispatchMock.mockClear();
    useSelectorMock.mockClear();
  });

  const mockState = {
    products: [],
  };
  const products = [
    {
      name: "boAt Smart WATCH STORM (Color As Per Availability)",
      brand: "BOAT",
      description:
        "Monitor sleep along with monitoring 24 hour uninterrupted heart rate, Blood oxygen level, and Blood Pressure. This watch is made specially for those who perform high-intensity workouts and require precise health and fitness monitoring.",
      price: 1200,
      countInStock: 10,
      imageUrl:
        "https://d12w9lfqeljony.cloudfront.net/5e9f92a01c986bafcabbafd145520b13/500x500/68c732ec2ecf12bdf1823ec02c6dfbaf5fbf53fb_62125539.jpg",
      category: "Electronics",
    },
  ];
  it("renders users comp with API data", async () => {
    useSelectorMock.mockReturnValue(mockState);
    const dispatch = jest.fn();
    useDispatchMock.mockReturnValue(dispatch);
    render(
      <App>
        <Router>
          <FilterScreen>
            <Product products={products} />
          </FilterScreen>
        </Router>
      </App>
    );
    expect(screen.findByText("PHILIPS"));
  });
});
