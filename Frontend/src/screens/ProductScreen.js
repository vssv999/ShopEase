import React from "react";
import "./ProductScreen.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Provider } from "react-redux";
import { addToWishList } from "../redux/actions/wishlistActions";

// Actions
import { getProductDetails } from "../redux/actions/productActions";
import { addToCart } from "../redux/actions/cartActions";
import { Col, Row } from "react-bootstrap";

//Description Box Starts

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text?.slice(0, 100) : text}
      <span
        onClick={toggleReadMore}
        className="read-or-hide text-info fw-bold"
        style={{ cursor: "pointer" }}
      >
        {isReadMore ? `...See more v` : `  Show less ^`}
      </span>
    </p>
  );
};

//Description Box ends

//Product Screen Starts

const ProductScreen = ({ match, history }) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const productDetails = useSelector((state) => state.getProductDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    if (product && match.params.id !== product._id) {
      dispatch(getProductDetails(match.params.id));
    }
  }, [dispatch, match, product]);

  const addToCartHandler = () => {
    dispatch(addToCart(product._id, qty));
    history.push(`/cartItems`);
  };

  const addToWishListHandler = () => {
    dispatch(addToWishList(product._id));
    history.push(`/wishItems`);
  };

  const handleQuantity = (type) => {
    if (type === "dec") {
      setQty(qty - 1);
    } else {
      setQty(qty + 1);
    }
  };

  return (
    <div className="productscreen">
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <Row className="productscreen m-0" data-testId="productdetails">
          <Col lg={6} className="productscreen__left">
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
            <div className="left__image">
              <img
                className="productimage"
                src={product.imageUrl}
                alt="productimage"
                onClick={handleShow}
              />
              <Modal show={show} onHide={handleClose}>
                <Modal.Body className="bg-dark imagemodal">
                  <img
                    className="productimage"
                    src={product.imageUrl}
                    alt="productimage"
                  />
                </Modal.Body>
              </Modal>
            </div>
            <div className="text-center">
              <Button
                className="modalbutton bg-none"
                variant="white"
                onClick={handleShow}
              >
                <i class="bi bi-zoom-in fw-bolder fs-4"></i>
              </Button>

              <Modal show={show} onHide={handleClose}>
                {/* <Modal.Header closeButton></Modal.Header> */}
                <Modal.Body className="bg-dark imagemodal">
                  <img
                    className="productimage"
                    src={product.imageUrl}
                    alt="productimage"
                  />
                </Modal.Body>
              </Modal>
            </div>
          </Col>
          <Col lg={5} className="productscreen__right mt-4">
            <div className="left__info">
              <p className="left__name m-0">{product.name}</p>
              <p className="fs-6 text-primary">{product.brand}</p>
              <p className="fs-5">
                Price:
                <span className="fw-bold fs-5 ms-2">
                  {product.price} Points
                </span>
              </p>
              <p>
                <i className="bi bi-check-circle-fill text-success"></i>Item
                price include shipping and handling
              </p>
              <div className="quantbutton d-flex">
                <p className="d-flex text-center border-radius-1 me-2">
                  <button
                    className="quantityplus border border-info fw-bold"
                    onClick={() => handleQuantity("dec")}
                  >
                    -
                  </button>
                  <h6 className="quantitynumber border border-info">{qty}</h6>
                  <button
                    className="quantityminus border border-info"
                    onClick={() => handleQuantity("inc")}
                  >
                    +
                  </button>
                </p>
                <Link
                  className="text-decoration-none "
                  onClick={addToCartHandler}
                >
                  <button
                    type="button"
                    className="cartbutton float-right d-lg-block d-none"
                  >
                    <i className="bi bi-cart-fill"></i>Add To Cart
                  </button>
                  <button
                    type="button"
                    className="cartbutton float-right d-md-block d-sm-block d-lg-none"
                  >
                    <i className="bi bi-cart-fill"></i>Add To Cart
                  </button>
                </Link>
              </div>
              <p
                className="wishlist fs-6 text-primary"
                onClick={addToWishListHandler}
              >
                <i className="bi bi-heart me-2"></i>
                Add to Wish List
              </p>
              <div>
                <p className="totalprice fs-6 pb-3 me-0">
                  Total
                  <span className="productprice fw-bold fs-6">
                    {product.price * qty} Points
                  </span>
                </p>
              </div>
              <p className="shipping fw-bold fs-6">
                <i className="bi bi-truck me-2"></i>Usually ships within 7
                Business days
              </p>
              <div className="description">
                <h5>Product Description:</h5>
                <p style={{ color: "#8A8989" }}>
                  <ReadMore>{product.description}</ReadMore>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default ProductScreen;

//Product Screen Ends
