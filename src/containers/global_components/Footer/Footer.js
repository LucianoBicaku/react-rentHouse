import React from "react";
import "./Footer.css";
import ScrollToTop from "./ScrollToTop";
import IMG from "../../../img/Layer_1.svg";
import Fb from "../../../img/facebook.svg";
import Ig from "../../../img/instagram.svg";
export default function Footer() {
  return (
    <div className="footer">
      <img src={IMG} alt="" />
      <div className="footer-content">
        <div className="footer-content-item"><p>Contuct Us</p>
          <img src={Fb} alt="facebook" />
          <img src={Ig} alt="instagram" />
        </div>
        <div className="footer-content-item"><p>Links</p>
          <ul className="footer-content-item-ul-links">
            <li>Rent</li>
            <li>Sell</li>
            <li>Premium</li>
            <li>Blog</li>
            <li>About</li>
          </ul>
        </div>
        <div className="footer-content-item"><p>Support</p>
          <ul>
            <li>FAQ</li>
            <li>Terms Of Service</li>
            <li>Contuct Us</li>
          </ul>
        </div>
      </div>
      <button className="back-to-top-btn"
      // onClick={() => {
      //   window.scrollTo({
      //     top: 0,
      //     left: 0,
      //     behavior: 'smooth'
      //   })
      // }}
      >
        <i className="fas fa-chevron-up"></i>
      </button>
    </div>
  );
}
