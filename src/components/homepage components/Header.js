// import React, { useState, Component } from "react";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./homepage.css";
import Featured from "./img/Path 261.svg";
import "../SignLogin/LoginRender.css";
import SignUpBox from "../SignLogin/SignUpBox";
import LogInBox from "../SignLogin/LogInBox";
import { Modal } from "reactstrap";
import logo from "./img/Layer_1.svg";
import { render } from "@testing-library/react";

export default class Header extends Component {
  state = {
    isLogInOpen: true,
    isSignInOpen: false,
    modal: false,
  };

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  showModal = () => {
    this.setState({ modal: !this.state.modal });
  };
  showLogInBox = () => {
    this.setState({ isLogInOpen: true, isSignInOpen: false });
  };
  showSignInBox = () => {
    this.setState({ isSignInOpen: true, isLogInOpen: false });
  };
  showSignIn = () => {
    console.log("punon");
    this.showModal();
    this.showSignInBox();
  };

  showLogIn = () => {
    console.log("punon");
    this.toggle();
    this.showLogInBox();
  };
  changeLogInState = (check) => {
    this.setState({ isLogInOpen: check, isSignInOpen: !check });
  };
  changeSignInState = (check) => {
    this.setState({ isLogInOpen: !check, isSignInOpen: check });
  };
  render() {
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
          <button href="#" onClick={this.showLogIn}>
            Log In
          </button>
          <i>or</i>
          <button href="#" onClick={this.showSignIn}>
            Sign In
          </button>
        </div>
        <Modal
          isOpen={this.state.modal}
          size={"lg"}
          toggle={this.toggle.bind(this)}
        >
          <div className="container my-container">
            <div className="row st-row">
              <div className="text">CONNECT WITH US</div>
              <button className="close" onClick={this.toggle.bind(this)}>
                &#x2716;
              </button>
            </div>
            <div className="row justify-content-center nd-row">
              <div className="col-3">
                <div
                  className={
                    "logintext " +
                    (this.state.isLogInOpen ? "active-border" : "")
                  }
                  onClick={this.showLogInBox.bind(this)}
                >
                  Login
                </div>
              </div>
              <div className="col-4">
                <div
                  className={
                    "signuptext " +
                    (this.state.isSignInOpen ? "active-border" : "")
                  }
                  onClick={this.showSignInBox.bind(this)}
                >
                  Sign Up
                </div>
              </div>
            </div>
            <div className="row rd-row">
              {this.state.isLogInOpen && <LogInBox redirectToSignIn={this.changeLogInState.bind(this)} />}
              {this.state.isSignInOpen && <SignUpBox redirectToLogIn={this.changeSignInState.bind(this)} />}
            </div>
          </div>
        </Modal>
      </header>
    );
  }
}
