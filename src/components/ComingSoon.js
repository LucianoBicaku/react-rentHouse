import React from "react";
import IMG from "./homepage components/img/Group 131.svg";
import { Link } from "react-router-dom";
import "./ErrorPage.css";
export default function ComingSoon() {
  return (
    <>
      <img src={IMG} className="coming-soon-img" />
      <p className="coming-soon-p">OOPS GO BACK WE ARE STILL WORKING...</p>
      <Link to="/">
        <button className="coming-soon-button">Click Here</button>
      </Link>
    </>
  );
}
