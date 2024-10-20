import React from "react";
import { Form } from "react-bootstrap";
import "./Search.css";

const SearchBox = () => {
  return (
    <Form inline className="me-2" data-testId="search">
      <div
        className="input-group mb-3 border border-dark rounded-pill search mt-1"
        style={{ width: "280px" }}
      >
        <input type="text" className="form-control border-0 rounded-pill" data-testId="searchinput" />
        <button className="input-group-text border-0 rounded-pill bg-white">
          <i className="bi bi-search bg-none fs-5"></i>
        </button>
      </div>
    </Form>
  );
};

export default SearchBox;
