import React, { Component } from "react";
import "./signup.css";
import Facebookbutton from "./Facebookbutton";
import Googlebutton from "./Googlebutton";
import axios from "axios";

class SignUpBox extends Component {
  state = {
    errors: [],
    username: "",
    email: "",
    password: "",
    confirmpass: "",
  };
  showValidationErr(elm, msg) {
    this.setState((prevState) => ({
      errors: [...prevState.errors, { elm, msg }],
    }));
  }
  clearValidationErr(elm) {
    this.setState((prevState) => {
      let newArr = [];
      for (let err of prevState.errors) {
        if (elm !== err.elm) {
          newArr.push(err);
        }
      }
      return { errors: newArr };
    });
  }

  onChange = (input) => (evt) => {
    this.setState({ [input]: evt.target.value });
    this.clearValidationErr(input);
  };

  passwordValidation(password) {
    var message = "";
    if (password.length === 0) {
      message = "Password Cannot be empty!";
    } else if (password.length > 0 && password.length < 6) {
      message = "6 Characters minimum!";
    } else if (!password.match(/[0-9]/g)) {
      message = "Password should contain a number.";
    }
    return message;
  }
  userNameValidation(username) {
    var message = "";
    if (username === "") {
      this.showValidationErr("username", "Username is required!");
    } else if (username.length > 0 && username.length < 4) {
      this.showValidationErr("username", "Username too short");
    }
    return message;
  }
  emailValidation(email) {
    var re = /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase()) ? "" : "Email is not valid!";
  }

  submitSignUp = (e) => {
    e.preventDefault();
    const { username, email, password, confirmpass } = this.state;
    var errorstatus;
    const userData = {
      email: this.state.email,
      password: this.state.password,
      confirmpass: this.state.confirmpass,
      username: this.state.username,
    };
    var usernameErr, emailErr, passwordErr;
    var check = true;
    usernameErr = this.userNameValidation(username);
    if (usernameErr.length !== 0) {
      check = false;
      this.showValidationErr("username", usernameErr);
    }
    emailErr = this.emailValidation(email);
    if (emailErr.length !== 0) {
      check = false;
      this.showValidationErr("email", "Email is not valid.");
    }
    passwordErr = this.passwordValidation(password);
    if (passwordErr.length !== 0) {
      check = false;
      this.showValidationErr("password", passwordErr);
    }
    if (confirmpass !== password) {
      check = false;
      this.showValidationErr("confirmpass", "Paswords must be the same!");
    }
    if (confirmpass === "") {
      check = false;
      this.showValidationErr(
        "confirmpass",
        "Confirm password cannot be empty!"
      );
    }
    if (check) {
      axios
        .post(
          "https://europe-west2-rent-app-83030.cloudfunctions.net/api/register",
          userData
        )
        .then((res) => {
          if (res.status === 200) {
            console.log(res.data);
            localStorage.setItem("userid", res.data._id);
            localStorage.setItem("token", res.data.token);
            // this.props.redirect("testuser");
          }
          if (res.status === 226) {
            var err_msg = res.data.error.split(" ")[0];
            this.showValidationErr(err_msg.toLowerCase(), res.data.error);
          }
        });
    }
  };
  render() {
    let usernameErr = null,
      passwordErr = null,
      emailErr = null,
      confirmpassErr = null;
    for (let err of this.state.errors) {
      if (err.elm === "username") {
        usernameErr = err.msg;
      }
      if (err.elm === "email") {
        emailErr = err.msg;
      }
      if (err.elm === "password") {
        passwordErr = err.msg;
      }
      if (err.elm === "confirmpass") {
        confirmpassErr = err.msg;
      }
    }
    return (
      <section className="container-fluid signup">
        <form className="form-horizontal">
          <section className="row">
            <div className="col-6">
              <div className="form-group">
                <div className="">
                  <label htmlFor="name" className="label">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    onChange={this.onChange("username")}
                    autoComplete="off"
                  />
                  <div className={usernameErr ? "alert alert-danger" : ""}>
                    <div className="error">
                      {usernameErr ? usernameErr : ""}
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="inputPassword3" className="label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword3"
                  onChange={this.onChange("password")}
                />
                <div className={passwordErr ? "alert alert-danger" : ""}>
                  <div className="error">{passwordErr ? passwordErr : ""}</div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="form-group margin-right">
                <label htmlFor="inputEmail3" className="label email-label">
                  E-mail
                </label>
                <input
                  type="email"
                  className="form-control margin"
                  id="inputEmail3"
                  onChange={this.onChange("email")}
                  autoComplete="off"
                />
                <div
                  className={
                    emailErr ? "alert alert-danger alert-padding-left" : ""
                  }
                >
                  <div className="error">{emailErr ? emailErr : ""}</div>
                </div>
              </div>
              <div className="form-group margin-right">
                <label
                  htmlFor="confirmPassword"
                  className="label confirmpass-label"
                >
                  Confirm Password{" "}
                </label>
                <input
                  type="password"
                  className="form-control margin alert-padding-left"
                  id="confirmPassword"
                  onChange={this.onChange("confirmpass")}
                />
                <div
                  className={
                    confirmpassErr
                      ? "alert alert-danger alert-padding-left"
                      : ""
                  }
                >
                  <div className="error">
                    {confirmpassErr ? confirmpassErr : ""}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </form>
        <div className=" row justify-content-center">
          <button type="submit" className="btn" onClick={this.submitSignUp}>
            {" "}
            Sign up
          </button>
        </div>
        <div className="form-group break-line">
          <div className="horizontal-rule"></div>
          <div id="text">Or</div>
        </div>
        <div className="row justify-content-center">
          <Facebookbutton userData={this.state} />
          <Googlebutton userData={this.state} />
        </div>
      </section>
    );
  }
}

export default SignUpBox;
