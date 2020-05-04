// import React, { useState, Component } from "react";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import Featured from "../../../img/Path 261.svg";
import "./SignLogin/LoginRender.css";
import SignUpBox from "./SignLogin/SignUpBox";
import LogInBox from "./SignLogin/LogInBox";
import User from "./User";
import { Modal } from "reactstrap";
import logo from "../../../img/Layer_2.svg";
import { Link } from "react-router-dom";

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
    // setInterval(this.refreshTokens.bind(this), 10000);
  };
  componentDidMount = () => {
    var username = localStorage.getItem('username');
    if (username !== null) {
      this.setState({ logged: !this.state.logged, username: username });
    }
  };
  refreshTokens() {
    var base = "https://rent-project.herokuapp.com/";
    var userid = localStorage.getItem("userid");
    console.log(userid);
    if (userid === "") {
      this.setState({ logged: !this.state.logged });
      return;
    }
    var token = localStorage.getItem("token");
    fetch(base + "users/" + userid, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
        Host: "api.producthunt.com",
      },
    })
      .then((res) => {
        console.log(res.status);
        return res.json();
      })
      .then((res) => {
        console.log(res);
        this.deleteAllCookies();
        // document.cookie = "username=" + res.username;
        // document.cookie = "userid=" + res._id;
        // document.cookie = "token=" + res.token;
        // document.cookie = "refreshtoken=" + res.refreshtoken;
        localStorage.setItem("username", res.username);
        localStorage.setItem("userid", res._id);
        localStorage.setItem("token", res.token);
        localStorage.setItem("refreshtoken", res.refreshtoken);
      });
  }
  logout = () => {
    this.setState({ logged: !this.state.logged });
    // this.deleteAllCookies();
    this.deleteLocStorageElem();
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append('Authorization', 'Bearer ' + localStorage.getItem("token"));
    fetch('https://rent-project.herokuapp.com/logout', {
      method: 'GET',
      headers: myHeaders,
      mode: 'cors',
      cache: 'default',
    })
      .then(response => console.log(response))
  }

  deleteLocStorageElem() {
    localStorage.removeItem("username");
    localStorage.removeItem("userid");
    localStorage.removeItem("token");
    localStorage.removeItem("refreshtoken");
  }
  render() {
    return (
      <header>
        <nav>
          <ul className="nav-area">
            <Link to="/">
              <li>
                <img src={logo} alt="" />
              </li>
            </Link>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/rent">
              <li>Rent</li>
            </Link>
            <Link to="/salepage">
              <li>Sell</li>
            </Link>
            <Link to="/premium">
              <li>
                <div className="premium-nav">
                  <img src={Featured} alt="" /> Premium
                </div>
              </li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
          </ul>
        </nav>

        {
          this.state.logged ? (
            <div className="login">
              <User username={this.state.username} logout={this.logout} userimagecolor={this.props.userimagecolor} />
            </div>
          ) : (
              <div className="login">
                <button onClick={this.showLogIn}>Log In</button>
                <i>or</i>
                <button onClick={this.showSignIn}>Sign Up</button>
              </div>
            )
        }
        < Modal
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
        </Modal >
      </header >
    );
  }
}
