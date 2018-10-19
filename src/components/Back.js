import React from "react";
import { Link } from "react-router-dom";

const Back = () => (
  <Link
    to="/"
    className="btn-floating grey"
    style={{
      top: "24px",
      left: "24px"
    }}
  >
    <i className="material-icons">arrow_back</i>
  </Link>
);

export default Back;
