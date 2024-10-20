import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import "./CartScreen.css";
// Components
import CartItem from "../components/CartItem";

// Actions
import { addToCart, removeFromCart } from "../redux/actions/cartActions";
import { Col, Row } from "react-bootstrap";

const CartScreen = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {}, []);

  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
  };

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const getCartSubTotal = () => {
    return cartItems
      .reduce((price, item) => price + item.price * item.qty, 0)
      .toFixed(0);
  };

  return (
    <div data-testId="cartscreen">
      <Row className="ms-5">
        <Col>
          <Link
            to={"/"}
            className="quickchange text-decoration-none text-dark ms-5"
          >
            {" "}
            Home{" "}
          </Link>{" "}
        </Col>
      </Row>
      <div className="cartscreen">
        <div className="cartscreen__left">
          {cartItems.length === 0 ? (
            <div>
              No Items in Cart. Get Back to <Link to="/">Home</Link>
            </div>
          ) : (
            cartItems.map((item) => (
              <CartItem
                key={item.product}
                item={item}
                qtyChangeHandler={qtyChangeHandler}
                removeHandler={removeFromCartHandler}
              />
            ))
          )}
        </div>
        <div className="cartscreen__right text-center">
          <div className="cartscreen__info">
            <p>Total Cost</p>
            <p>{getCartSubTotal()} Points</p>
          </div>
          <Row className="shoppinglink">
            <Col lg={6} md={12} sm={12}>
              <Link to={"/"}>
                {" "}
                <button className="redirect">Continue Shopping</button>
              </Link>
            </Col>
            <Col lg={6} md={12} sm={12}>
              <button className="checkout">Secure Checkout</button>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default CartScreen;
