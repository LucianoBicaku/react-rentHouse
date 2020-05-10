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
    var username = localStorage.getItem("username");
    var userid = localStorage.getItem("userid");
    if (username !== null) {
      this.setState({ logged: !this.state.logged, username: username });
    }
    console.log("component did mount");

    axios
      .get(
        "https://rent-project.herokuapp.com/users/" + userid, //shembull kerkese qe kekon auth
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        //kur ka skadu token e ben kerkesen me refresh token ne header dhe
        // illoj si kerkesa siper merr tdhenat pstj ben thirrjen e tjeter per te fresku ntoken-at
        console.log(JSON.stringify(err.data));
        axios("https://rent-project.herokuapp.com/users/" + userid, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("refreshtoken"),
          },
        })
          .then((res) => {
            console.log(
              "second response" + console.log(JSON.stringify(res.data))
            );
            if (res.ok) {
              //bej vep
              axios(
                "https://rent-project.herokuapp.com/refreshtokens/" +
                  localStorage.getItem("email"),
                {
                  method: "GET",
                  headers: {
                    "Content-Type": "application/json",
                    Authorization:
                      "Bearer " + localStorage.getItem("refreshtoken"),
                  },
                }
              ).then((res) => {
                console.log(res);
                if (res.ok) {
                  localStorage.setItem("token", res.data.token);
                  localStorage.setItem("refreshtoken", res.data.refreshtoken);
                  console.log("tokens changed");
                }
              });
            }
          })
          .catch((err) => {
            this.logout();
          });
      });
  };

  logout = () => {
    this.setState({ logged: false });
    // this.deleteAllCookies();
    this.deleteLocStorageElem();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Authorization",
      "Bearer " + localStorage.getItem("token")
    );
    fetch("https://rent-project.herokuapp.com/logout", {
      method: "GET",
      headers: myHeaders,
      mode: "cors",
      cache: "default",
    }).then((response) => console.log(response));
  };

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
                <img src={logo} alt="" className="header-logo-img" />
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
