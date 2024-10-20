import * as actionTypes from "../constants/wishListConstants";

const WISHLIST_INITIAL_STATE = {
  wishItems: [],
};

export const wishListReducer = (state = WISHLIST_INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_WISHLIST:
      const item = action.payload;

      const existItem = state.wishItems.find((x) => x.product === item.product);

      if (existItem) {
        return {
          ...state,
          wishItems: state.wishItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        return {
          ...state,
          wishItems: [...state.wishItems, item],
        };
      }
    case actionTypes.REMOVE_FROM_WISHLIST:
      return {
        ...state,
        wishItems: state.wishItems.filter((x) => x.product !== action.payload),
      };
    default:
      return state;
  }
};
