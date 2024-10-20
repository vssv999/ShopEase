import "./CartItem.css";
import { Link } from "react-router-dom";
import React from "react";
import { NavLink } from "react-bootstrap";

const CartItem = ({ item, qtyChangeHandler, removeHandler }) => {
  return (
    <div className="cartitem" data-testId="cartItems">
      <div className="cartitem__image">
        <img id="imagedetails" src={item.imageUrl} alt={item.name} />
      </div>
      <Link to={`/product/${item.product}`} className="cartItem__name">
        <p>{item.name.substring(0, 32)}...</p>
      </Link>
      <p className="cartitem__price fw-bold">{item.price} Points</p>
      <p
        value={item.qty}
        onChange={(e) => qtyChangeHandler(item.product, e.target.value)}
        className="cartItem__select"
      >
        Quantity: {item.qty}
      </p>
      <Link
        className="cartItem__deleteBtn"
        onClick={() => removeHandler(item.product)}
      >
        <h6>Remove</h6>
      </Link>
    </div>
  );
};

export default CartItem;
