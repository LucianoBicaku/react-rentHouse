import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./homepage.css";
import Featured from "./img/Path 261.svg";
import "../SignLogin/LoginRender.css";
import SignUpBox from "../SignLogin/SignUpBox";
import LogInBox from "../SignLogin/LogInBox";
import { Modal } from "reactstrap";
import logo from "./img/Layer_1.svg";

export default function Header() {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const [Show, setShow] = useState({ isLogInOpen: true, isSignInOpen: false });

  const showLogInBox = () =>
    setShow({ isLogInOpen: true, isSignInOpen: false });

  const showSignInBox = () =>
    setShow({ isSignInOpen: true, isLogInOpen: false });

  const showSignIn = () => {
    toggle();
    showSignInBox();
  };

  const showLogIn = () => {
    toggle();
    showLogInBox();
  };

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
              <a href="#" className="premium-nav">
                <img src={Featured} /> Premium
              </a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="login">
        <button href="#" onClick={showLogIn}>
          Log In
        </button>
        <i>or</i>
        <button href="#" onClick={showSignIn}>
          Sign In
        </button>
      </div>
      <Modal isOpen={modal} size={"lg"} toggle={toggle}>
        <div className="container">
          <div className="row st-row">
            <div className="text">CONNECT WITH US</div>
            <button className="close" onClick={toggle}>
              &#x2716;
            </button>
          </div>
          <div className="row justify-content-center nd-row">
            <div className="col-3">
              <div
                className={
                  "logintext " + (Show.isLogInOpen ? "active-border" : "")
                }
                onClick={showLogInBox.bind(this)}
              >
                Login
              </div>
            </div>
            <div className="col-4">
              <div
                className={
                  "signuptext " + (Show.isSignInOpen ? "active-border" : "")
                }
                onClick={showSignInBox.bind(this)}
              >
                Sign Up
              </div>
            </div>
          </div>
          <div className="row rd-row">
            {Show.isLogInOpen && <LogInBox />}
            {Show.isSignInOpen && <SignUpBox />}
          </div>
        </div>
      </Modal>
    </header>
  );
}
