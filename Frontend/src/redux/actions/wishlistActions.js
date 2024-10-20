import * as actionTypes from "../constants/wishListConstants";
import axios from "axios";

export const addToWishList = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/wishItems/${id}`);

  dispatch({
    type: actionTypes.ADD_TO_WISHLIST,
    payload: {
      product: data._id,
      name: data.name,
      imageUrl: data.imageUrl,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    },
  });

  localStorage.setItem("wish", JSON.stringify(getState().wish.wishItems));
};

export const removeFromWishList = (id) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.REMOVE_FROM_WISHLIST,
    payload: id,
  });

  localStorage.setItem("wish", JSON.stringify(getState().wish.wishItems));
};
