// import React, { useState, Component } from "react";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import Featured from "../../../img/Path 261.svg";
import "./SignLogin/LoginRender.css";
import LogInBox from "./SignLogin/LogInBox";
import SignUpBox from "./SignLogin/SignUpBox";
import User from "./User";
import { Modal } from "reactstrap";
import logo from "../../../img/Layer_2.svg";
import { Link } from "react-router-dom";
import axios from "axios";
import jwt_decode from "jwt-decode";

export default class Header extends Component {
  state = {
    isLogInOpen: true,
    isSignInOpen: false,
    modal: false,
    logged: false,
    username: "",
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
    this.showModal();
    this.showSignInBox();
  };

  showLogIn = () => {
    this.toggle();
    this.showLogInBox();
  };
  redirect = (username) => {
    this.setState({ logged: !this.state.logged, username });
    this.toggle();
  };
  componentDidMount = () => {
    var token = localStorage.getItem("token");
    if (token) {
      const decoded_token = jwt_decode(token);
      console.log(jwt_decode(token));
      if (decoded_token.exp * 1000 > Date.now()) {
        this.setState({ logged: !this.state.logged, username: "testuser" });
      }
    }
  };
  logout = () => {
    this.setState({ logged: false });
    axios
      .post("https://europe-west2-rent-app-83030.cloudfunctions.net/api/logout")
      .then((res) => {
        this.deleteLocStorageElem();
      });
  };

  deleteLocStorageElem() {
    localStorage.removeItem("username");
    localStorage.removeItem("userid");
    localStorage.removeItem("token");
  }
  render() {
    return (
      <header>
        <nav>
          <ul className="nav-area">
            <Link to="/">
              <li>
                <img src={logo} alt="" className="header-logo-img" />
              </li>
            </Link>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/rent">
              <li>Rent</li>
            </Link>
            <Link to="/SellPage">
              <li>Sell</li>
            </Link>
            <Link to="/premium">
              <li>
                <div className="premium-nav">
                  <img src={Featured} alt="" className="premium-img-header" />
                  Premium
                </div>
              </li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
          </ul>{" "}
          {this.state.logged ? (
            <div className="login">
              <User
                username={this.state.username}
                logout={this.logout}
                userimagecolor={this.props.userimagecolor}
              />
            </div>
          ) : (
            <div className="login">
              <button onClick={this.showLogIn}>Log In</button>
              <i>or</i>
              <button onClick={this.showSignIn}>Sign Up</button>
            </div>
          )}
        </nav>

        <Modal
          isOpen={this.state.modal}
          size={"lg"}
          toggle={this.toggle.bind(this)}
        >
          <div className="container my-container">
            <div className="row st-row">
              <div className="text">CONNECT WITH US!</div>
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
              {this.state.isLogInOpen && <LogInBox redirect={this.redirect} />}
              {this.state.isSignInOpen && (
                <SignUpBox redirect={this.redirect} />
              )}
            </div>
          </div>
        </Modal>
      </header>
    );
  }
}
