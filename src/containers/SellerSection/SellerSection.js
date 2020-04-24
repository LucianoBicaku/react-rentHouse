import React from "react";
import "./SellerSection.css";
import { Link } from "react-router-dom";
export default function SellerSection() {
  return (
    <div className="seller">
      <h1>Are you a seller?</h1>
      <Link to="/salepage">
        <button>Click Here</button>
      </Link>
    </div>
  );
}
