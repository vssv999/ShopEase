import configureStore from "redux-mock-store";
import { getProducts } from "../redux/actions/productActions";
import thunk from "redux-thunk";
import * as actions from "../redux/actions/productActions";

//store
const mockStore = configureStore([thunk]);
test("should test for getProducts action generator", () => {
  const store = mockStore([]);
  store.dispatch(getProducts());
});

//actions
describe("get products request", () => {
  it("should creat a Pending action on request Robots", () => {
    const store = mockStore();
    store.dispatch(actions.getProducts());
    const action = store.getActions();
    expect(action).toEqual([{ type: "GET_PRODUCTS_REQUEST" }]);
  });
});
