import React from "react";
import Grid3 from "../global_components/Grid3/Grid3";
import Grid4 from "../global_components/Grid4/Grid4";
import "./Offers.css";

export default function Offers() {
  return (
    <div className="best-offers">
      <h1>Check out our best offers!</h1>

      <div className="offers-content">
        <Grid3 />
        <Grid4 />
      </div>
    </div>
  );
}
