import React, { Component } from 'react'
import "./loginbox.css";
import { PostData } from "./services/PostData"
import { Redirect } from "react-router-dom"
import Facebookbutton from './Facebookbutton';
import Googlebutton from './Googlebutton';

class LogInBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: [],
      redirect: false,
      password: "",
      email: ""
    };
  }
  showValidationErr(elm, msg) {
    this.setState(prevState => ({ errors: [...prevState.errors, { elm, msg }] }));
  }
  clearValidationErr(elm) {
    this.setState(prevState => {
      let newArr = [];
      for (let err of prevState.errors) {
        if (elm !== err.elm) {
          newArr.push(err);
        }
      }
      return { errors: newArr };
    });
  }

  onEmailChange(e) {
    this.setState({ email: e.target.value });
    this.clearValidationErr("email");
  }
  onPasswordChange(e) {
    this.setState({ password: e.target.value });
    this.clearValidationErr("password");
  }

  login() {
    if (this.state.email === "") {
      this.showValidationErr("email", "Email is required!");
    }
    if (this.state.password === "") {
      this.showValidationErr("password", "Password Cannot be empty!");
    }
    else {
      const { password, email } = this.state;
      PostData('login', { password, email })
        .then((result) => {
          if (result.userdata) {
            sessionStorage.setItem('userdata', result);
            document.cookie = ('userdata=' + result);
            this.setState({ redirectToHome: true });
          }
          else {
            console.log(result.err);
            this.showValidationErr("login", result.message.split(',')[0]);
          }
        })
    }

  }

  render() {
    let passwordErr = null, emailErr = null, loginErr = null;
    if (this.state.redirect) {
      return (<Redirect to={'/allhomes'} />)
    }
    for (let err of this.state.errors) {
      if (err.elm === "password") {
        passwordErr = err.msg;
      }
      if (err.elm === "email") {
        emailErr = err.msg;
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
                <label htmlFor="inputEmail" className="label" >Email</label>
                <input type="email" className="form-control" id="inputEmail" onChange={this.onEmailChange.bind(this)} />
                <div className={emailErr ? "alert alert-danger" : ''}>
                  <div className="error">{emailErr ? emailErr : ''}</div>
                </div>
              </div>
              <div className="form-group my-form-group">
                <label htmlFor="inputPassword" className="label" >Password</label>
                <input type="password" className="form-control" id="inputPassword" onChange={this.onPasswordChange.bind(this)} />
                <div className={passwordErr || loginErr ? "alert alert-danger" : ''}>
                  <div className="error">{passwordErr || loginErr ? passwordErr || loginErr : ''}</div>
                  <div className="clear-rel-pos"></div>
                </div>
              </div>
              <div className="custom-control custom-checkbox my-checkbox">
                <input type="checkbox" className="custom-control-input" id="customCheck" name="example1" />
                <label className="custom-control-label" htmlFor="customCheck">Remember me</label>
              </div>
            </form>
            <div>
              <button type="submit" className="btn my-btn" onClick={this.login.bind(this)}>Login</button>
              <div className="clear-button"></div>
            </div>
          </div>
          <div className="form-group break-line">
            <div className="horizontal-rule"></div>
            <div id="text">Or</div>
          </div>
          <div className="clear"></div>
          <div className="row justify-content-center social-media">
            <Facebookbutton userData={this.state} />
            <Googlebutton userData={this.state} />
          </div>
        </section>
      </section>
    )
  }
}
export default LogInBox
