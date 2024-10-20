import React from "react";
import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import "./HomeScreen.css";

//Components
import { prices } from "../utils.js";
import Product from "../components/Product";

const FilterScreen = ({ products, error, getFilterUrl, min, max }) => {
  const [data, setData] = useState(products);

  useEffect(() => {
    setData(products);
  }, [products]);

  let filterCategories = (event) => {
    event.target.innerText === "All Categories"
      ? setData(products)
      : setData(
          products.filter((product) => {
            return product.category === event.target.innerText;
          })
        );
    console.log(event.target.innerText);
  };

  return (
    <Container fluid>
      <br />
      <div data-testId="filterscreen">
        <div className="homescreen row mt-2">
          <div className="col-lg-1"></div>
          <div className=" col-lg-2">
            <div>
              <h5
                className="filtering_products text-center border-bottom p-2"
                data-testId="filtertag"
              >
                Filters
              </h5>
              <div className="pricefilter d-block">
                <h6>Filter by Price</h6>
                <ul className="p-0">
                  {prices.map((p) => (
                    <li key={p.name}>
                      <Link
                        id="pricetags"
                        to={getFilterUrl({ min: p.min, max: p.max })}
                        className={
                          `${p.min}-${p.max}` === `${min}-${max}`
                            ? "active"
                            : ""
                        }
                        style={{ textDecoration: "none", color: "#000" }}
                      >
                        {p.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="category" data-testId="category">
              <h6 className="border-top p-2">Category</h6>
              <div data-testId="categoryFiltering">
                <button onClick={(event) => filterCategories(event)}>
                  All Categories
                </button>
                <button onClick={(event) => filterCategories(event)}>
                  Electronics
                </button>
                <button
                  onClick={(event) => filterCategories(event)}
                >
                  Health
                </button>
                <button onClick={(event) => filterCategories(event)}>
                  Outdoor
                </button>
                <button onClick={(event) => filterCategories(event)}>
                  Travel
                </button>
                <button onClick={(event) => filterCategories(event)}>
                  Fashion
                </button>
              </div>
            </div>
          </div>
          {error ? (
            <h2 className="text-center">{error}</h2>
          ) : (
            <p
              className="homescreen_products col-lg-9"
              data-testId="productslist"
            >
              {products &&
                data.map((product) => (
                  <Product
                    key={product._id}
                    name={product.name}
                    description={product.description}
                    price={product.price}
                    imageUrl={product.imageUrl}
                    brand={product.brand}
                    productId={product._id}
                    product={product}
                  />
                ))}
            </p>
          )}
        </div>
        {/* <div className="col-lg-1"></div> */}
      </div>
    </Container>
  );
};

export default FilterScreen;
