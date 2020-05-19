import React from "react";
import "./homepage.css";
import { Link } from "react-router-dom";
export default function Seller() {
  return (
    <div className="seller">
      <h1>Are you a seller?</h1>
      <Link to="/SellPage">
        <button>Click Here</button>
      </Link>
    </div>
  );
}
