import "./WishListScreen.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import React from "react";

// Components
import WishItem from "../components/WishItem";

// Actions
import { removeFromWishList } from "../redux/actions/wishlistActions";
import { Row, Col } from "react-bootstrap";

const WishListScreen = () => {
  const dispatch = useDispatch();

  const wish = useSelector((state) => state.wish);
  const { wishItems } = wish;

  useEffect(() => {}, []);

  const removeFromWishHandler = (id) => {
    dispatch(removeFromWishList(id));
  };

  return (
    <>
      <Row className="ms-5">
        <Col>
          <Link
            to={"/"}
            className="quickchange text-decoration-none text-dark ms-5"
          >
            {" "}
            Home{" "}
          </Link>{" "}
          |
          <Link
            to={"/cartItems"}
            className="quickchange text-decoration-none text-dark"
          >
            {" "}
            ShoppingCart
          </Link>
        </Col>
      </Row>
      <div className="wishscreen">
        <hr />
        <div className="wishscreen__left">
          {wishItems.length === 0 ? (
            <div>
              Your Wish List is Empty. Get Back to <Link to="/">Home</Link>
            </div>
          ) : (
            wishItems.map((item) => (
              <WishItem
                key={item.product}
                item={item}
                removeHandler={removeFromWishHandler}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default WishListScreen;
