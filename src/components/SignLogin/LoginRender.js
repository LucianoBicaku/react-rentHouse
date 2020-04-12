import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./LoginRender.css";
import SignUpBox from "./SignUpBox";
import LogInBox from "./LogInBox";

class LoginRender extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogInOpen: true,
      isSignInOpen: false,
    };
  }
  showLogInBox() {
    this.setState({ isLogInOpen: true, isSignInOpen: false });
  }
  showSignInBox() {
    this.setState({ isSignInOpen: true, isLogInOpen: false });
  }
  render() {
    return (
      <div className="container my-container">
        <div className="row st-row">
          <div className="text">CONNECT WITH US</div>
          <button className="close">&#x2716;</button>
        </div>
        <div className="row justify-content-center nd-row">
          <div className="col-6">
            <div className="logintext" onClick={this.showLogInBox.bind(this)}>
              Login
            </div>
          </div>
          <div className="col-6">
            <div className="signuptext" onClick={this.showSignInBox.bind(this)}>
              Sign Up
            </div>
          </div>
        </div>
        <div className="row rd-row">
          {this.state.isLogInOpen && <LogInBox />}
          {this.state.isSignInOpen && <SignUpBox />}
        </div>
      </div>
    );
  }
}

export default LoginRender;
