import * as reducers from "../redux/reducers/productReducers";
import * as actionTypes from "../redux/constants/productConstants";

const initialStateProducts = {
  loading: true,
  products: [],
};
describe("products reducer", () => {
  it("should handle GET_PRODUCTS_REQUEST action", () => {
    expect(
      reducers.getProductsReducer(initialStateProducts, {
        type: actionTypes.GET_PRODUCTS_REQUEST,
        payload: { loading: true },
      })
    ).toEqual({
      products: [],
      loading: true,
    });
  });
  it("should handle GET_PRODUCTS_SUCCESS action", () => {
    expect(
      reducers.getProductsReducer(initialStateProducts, {
        type: actionTypes.GET_PRODUCTS_SUCCESS,
        payload: [
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
        ],
      })
    ).toEqual({
      products: [
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
      ],
      loading: false,
    });
  });
});
