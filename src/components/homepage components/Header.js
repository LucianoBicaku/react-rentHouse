import React from "react";
import "./homepage.css";
import logo from "./img/Layer_1.svg";
export default function Header() {
  return (
    <header>
      <div>
        <nav>
          <ul className="nav-area">
            <li>
              <img src={logo} alt="" />
            </li>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Rent</a>
            </li>
            <li>
              <a href="#">Sell</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="login">
        <a href="#">Sign Up</a>
        <i>or</i>
        <a href="#">Log In</a>
      </div>
    </header>
  );
}
