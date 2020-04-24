import React from "react";
import "./Footer.css";
import IMG from "../../../img/Layer_1.svg";
export default function Footer() {
  return (
    <div className="footer">
      <img src={IMG} alt="" />
      <div className="footer-content">
        <p className="footer-content-item">Contuct Us:</p>
        <p className="footer-content-item">Social Media :</p>
        <p className="footer-content-item">Terms Of Service </p>
      </div>
    </div>
  );
}
