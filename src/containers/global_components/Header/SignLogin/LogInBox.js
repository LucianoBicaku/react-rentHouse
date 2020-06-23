import React, { Component } from "react";
import "./loginbox.css";
import Facebookbutton from "./Facebookbutton";
import Googlebutton from "./Googlebutton";
import axios from "axios";
// import jwt_decode from "jwt-decode"

class LogInBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: [],
      redirect: true,
      password: "",
      email: "",
    };
  }
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

  onRememberMeChange(e) {
    if (e.target.checked) {
      // document.cookie = "email=" + this.state.email;
      localStorage.setItem("email", this.state.email);
    } else {
      // this.delete_cookie('email');
      localStorage.removeItem("email");
    }
  }
  componentDidMount() {
    // var email = this.getCookie('email');
    var email = localStorage.getItem("email");
    if (email !== null) {
      document.getElementById("inputEmail").value = email;
      document.getElementById("customCheck").checked = true;
      this.setState({ email });
      this.showValidationErr("email", "Welcome back!");
    }
  }
  getCookie(a) {
    var b = document.cookie.match("(^|[^;]+)\\s*" + a + "\\s*=\\s*([^;]+)");
    return b ? b.pop() : "";
  }
  delete_cookie(name) {
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
  }
  login() {
    if (this.state.email === "") {
      this.showValidationErr("email", "Email is required!");
    }
    if (this.state.password === "") {
      this.showValidationErr("password", "Password Cannot be empty!");
    } else {
      var resultstatus;
      const data = {
        password: this.state.password,
        email: this.state.email,
      };
      var base = "https://rent-project.herokuapp.com/";
      fetch(base + "login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((result) => {
          if (result.status === 200 || result.status === 400);
          resultstatus = result.status;
          return result.json();
        })
        .then((result) => {
          if (resultstatus === 200) {
            console.log(result);
            // document.cookie = "username=" + result.username;
            // document.cookie = "userid=" + result._id;
            // document.cookie = "token=" + result.token;
            // document.cookie = "refreshtoken=" + result.refreshtoken;
            localStorage.setItem("username", result.username);
            localStorage.setItem("userid", result._id);
            localStorage.setItem("token", result.token);
            localStorage.setItem("refreshtoken", result.refreshtoken);

            this.props.redirect(result.username);
          } else if (resultstatus === 400) {
            this.showValidationErr("password", "Incorrect email/password!");
          }
        });
    }
  }

  login2() {
    const userData = {
      email: this.state.email,
      password: this.state.password,
    };
    if (this.state.email === "") {
      this.showValidationErr("email", "Email is required!");
    }
    if (this.state.password === "") {
      this.showValidationErr("password", "Password Cannot be empty!");
    } else {
      axios
        .post(
          "https://europe-west2-rent-app-83030.cloudfunctions.net/api/login",
          userData
        )
        .then((res) => {
          console.log(res.data);
          localStorage.setItem("userid", res.data.userId);
          localStorage.setItem("token", res.data.token);
          this.props.redirect("testuser");
        })
        .catch((err) => {
          // this.showValidationErr('password', "Incorrect email/password!");
          console.log(err.response.data);
          this.showValidationErr("password", "Incorrect password!");
        });
    }
  }

  render() {
    let passwordErr = null,
      emailErr = null,
      loginErr = null;
    for (let err of this.state.errors) {
      if (err.elm === "password") {
        passwordErr = err.msg;
      }
      if (err.elm === "email") {
        var emailSaved; //emailSaved kur klik remember me checkbox
        if (err.msg === "Welcome back!") {
          emailSaved = err.msg;
        } else {
          emailErr = err.msg;
        }
      }
      if (err.elm === "login") {
        loginErr = err.msg;
      }
    }
    return (
      <section className="container-fluid">
        <section className="row justify-content-center login-box">
          <div className="btn-align">
            <form className="form-horizontal">
              <div className="form-group">
                <label htmlFor="inputEmail" className="label">
                  E-mail
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail"
                  onChange={this.onChange("email")}
                  autoComplete="off"
                />
                <div
                  className={
                    emailSaved
                      ? "alert alert-success"
                      : emailErr
                      ? "alert alert-danger"
                      : ""
                  }
                >
                  <div className="error">
                    {emailErr ? emailErr : emailSaved ? emailSaved : ""}
                  </div>
                </div>
              </div>
              <div className="form-group my-form-group">
                <label htmlFor="inputPassword" className="label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword"
                  onChange={this.onChange("password")}
                />
                <div
                  className={
                    passwordErr || loginErr ? "alert alert-danger" : ""
                  }
                >
                  <div className="error">
                    {passwordErr || loginErr ? passwordErr || loginErr : ""}
                  </div>
                  <div className="clear-rel-pos"></div>
                </div>
              </div>
              <div className="custom-control custom-checkbox my-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck"
                  name="example1"
                  onChange={this.onRememberMeChange.bind(this)}
                />
                <label className="custom-control-label" htmlFor="customCheck">
                  Remember me
                </label>
              </div>
            </form>
            <div>
              <button
                type="submit"
                className="btn my-btn"
                onClick={this.login2.bind(this)}
              >
                Login
              </button>
              <div className="clear-button"></div>
            </div>
          </div>
          <div className="form-group break-line">
            <div className="horizontal-rule"></div>
            <div id="text">Or</div>
          </div>
          <div className="clear"></div>
          <div className="row justify-content-center social-media">
            <Facebookbutton />
            <Googlebutton userData={this.state} />
          </div>
        </section>
      </section>
    );
  }
}
export default LogInBox;
