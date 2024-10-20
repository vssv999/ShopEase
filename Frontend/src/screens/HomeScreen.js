import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";

import "./HomeScreen.css";
//Redux
import { getProducts } from "../redux/actions/productActions";
//Screens
import FilterScreen from "./FilterScreen";

const HomeScreen = (props) => {
  const { min = 0, max = 0, order = "newest" } = useParams();
  const dispatch = useDispatch();
  const { products, error } = useSelector((state) => state.getProducts);

  useEffect(() => {
    dispatch(getProducts(min, max, order));
  }, [dispatch, min, max, order]);

  const addToWishListHandler = () => {
    dispatch(addToWishList(product._id, qty));
    history.push(`/wishlist`);
  };

  const getFilterUrl = (filter) => {
    const filterMin = filter.min ? filter.min : filter.min === 0 ? 0 : min;
    const filterMax = filter.max ? filter.max : filter.min === 0 ? 0 : min;
    const sortOrder = filter.order || order;
    return `/min/${filterMin}/max/${filterMax}/order/${sortOrder}`;
  };

  return (
    <Container fluid data-testId="homescreen">
      <div className="mt-2">
        <Row className="ms-3">
          <Col lg={8} className="me-3"></Col>
          <Col lg={3} className="homescreen_sorting d-flex">
            Sort by:
            <select
              className="ms-2 p-1"
              value={order}
              onChange={(e) => {
                props.history.push(getFilterUrl({ order: e.target.value }));
              }}
              style={{ transform: "translateY(-10%)" }}
            >
              <option value="newest">Most Popular</option>
              <option value="lowest">Price: Low to High</option>
              <option value="highest">Price: High to Low</option>
            </select>
          </Col>
        </Row>
      </div>
      <div>
        <FilterScreen
          products={products}
          error={error}
          getFilterUrl={getFilterUrl}
          min={min}
          max={max}
          addToWishListHandler={addToWishListHandler}
        />
      </div>
    </Container>
  );
};

export default HomeScreen;
