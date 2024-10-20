import React from "react";
import { Link } from "react-router-dom";
import "./WishItem.css";

const WishItem = ({ item, removeHandler }) => {
  return (
    <div className="wishitem">
      <div className="wishitem__image">
        <img src={item.imageUrl} alt={item.name} />
      </div>
      <div className="wishItem__name fs-5">
        <p>{item.name.substring(0, 32)}...</p>
      </div>
      <p className="wishitem__price fw-bold">{item.price} Points</p>
      <button
        className="wishItem__deleteBtn"
        onClick={() => removeHandler(item.product)}
      >
        <i className="bi bi-trash3-fill"></i>
      </button>
    </div>
  );
};

export default WishItem;
