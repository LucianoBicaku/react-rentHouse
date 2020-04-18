import React, { Component } from "react";
import "./signup.css";
import { PostData } from "./services/PostData"
import { Redirect } from "react-router-dom"
import Facebookbutton from './Facebookbutton';
import Googlebutton from './Googlebutton';

class SignUpBox extends Component {
  state = {
    errors: [],
    redirect: true,
    username: '',
    email: '',
    birthday: '',
    password: '',
    gender: '',
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

  onUsernameChange(e) {
    this.setState({ username: e.target.value });
    this.clearValidationErr("username");
  }
  onEmailChange(e) {
    this.setState({ email: e.target.value });
    this.clearValidationErr("email");
  }
  onPasswordChange(e) {
    this.setState({ password: e.target.value });
    this.clearValidationErr("password");
  }
  onBithdayChange(e) {
    this.setState({ birthday: e.target.value });
    this.clearValidationErr("birthday");
  }
  setGender(e) {
    this.setState({ gender: e.target.value });
  }

  handleConfirmPassword(e) {
    if (this.state.password.substr(0, e.target.value.length) !== e.target.value) {
      this.showValidationErr("confirmpassword", "Passwords must be the same");
    }
    else {
      this.clearValidationErr("confirmpassword");
    }
  }
  submitSignUp = (e) => {
    if (this.state.username === "") {
      this.showValidationErr("username", "Username is required!");
    }
    if (this.state.email === "") {
      this.showValidationErr("email", "Email is required!");
    }
    if (this.state.password === "") {
      this.showValidationErr("password", "Password Cannot be empty!");
    }
    if (this.state.birthday === "") {
      this.showValidationErr("birthday", "Chose your date of birth!");
    }
    else {
      const { username, email, birthday, password, gender } = this.state;
      PostData('signup', { email, password, username, birthday, gender })
        .then((result) => {
          if (result.userdata) {
            sessionStorage.setItem('userdata', result.token);
          }
          else {
            console.log("Email or password wrong");
            this.showValidationErr("login", "Email or password wrong");
          }
        })
      // this.setState({ redirect: false });
    }
  }
  render() {

    let usernameErr = null, passwordErr = null, emailErr = null, birthdayErr = null, confirmpassErr = null;
    for (let err of this.state.errors) {
      if (err.elm === "username") {
        usernameErr = err.msg;
      }
      if (err.elm === "password") {
        passwordErr = err.msg;
      }
      if (err.elm === "email") {
        emailErr = err.msg;
      }
      if (err.elm === "birthday") {
        birthdayErr = err.msg;
      }
      if (err.elm === "confirmpassword") {
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
                  <label htmlFor="name" className="label">Username</label>
                  <input type="text" className="form-control" id="name" onChange={this.onUsernameChange.bind(this)}
                  />
                  <div className={usernameErr ? "alert alert-danger" : ''}>
                    <div className="error">{usernameErr ? usernameErr : ''}</div>
                  </div>
                </div>
              </div>
              <div className="form-group has-feedback">
                <label htmlFor="dateofbirth" className="label">Date of Birth</label>
                <input type="date" className="form-control date-picker" id="dateofbirth" onChange={this.onBithdayChange.bind(this)} />
                <div className={birthdayErr ? "alert alert-danger" : ''}>
                  <div className="error">{birthdayErr ? birthdayErr : ''}</div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="inputPassword3" className="label">Password</label>
                <input type="password" className="form-control" id="inputPassword3" onChange={this.onPasswordChange.bind(this)} />
                <div className={passwordErr ? "alert alert-danger" : ''}>
                  <div className="error">{passwordErr ? passwordErr : ''}</div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="form-group margin-right">
                <label htmlFor="inputEmail3" className="label">E-mail</label>
                <input type="email" className="form-control margin" id="inputEmail3" onChange={this.onEmailChange.bind(this)} />
                <div className={emailErr ? "alert alert-danger" : ''}>
                  <div className="error">{emailErr ? emailErr : ''}</div>
                </div>
              </div>
              <div className="my-form-group" onChange={this.setGender.bind(this)}>
                <label className="radio-container">Male
                  <input type="radio" name="radio" value="male" />
                  <span className="checkmark"></span>
                </label>
                <label className="radio-container">Female
                  <input type="radio" name="radio" value="female" />
                  <span className="checkmark"></span>
                </label>
                <label className="radio-container">Other
                  <input type="radio" name="radio" value="other" />
                  <span className="checkmark"></span>
                </label>
              </div>
              <div className="form-group margin-right">
                <label htmlFor="confirmPassword" className="label" >Confirm Password </label>
                <input type="password" className="form-control margin" id="confirmPassword"
                  onChange={this.handleConfirmPassword.bind(this)} />
                <div className={confirmpassErr ? "alert alert-danger" : ''}>
                  <div className="error">{confirmpassErr ? confirmpassErr : ''}</div>
                </div>
              </div>
            </div>
          </section>

        </form>
        <div className="form-group row justify-content-center">
          <button type="submit" className="btn"
            onClick={this.submitSignUp}> Sign up</button>
        </div>
        < div className="form-group break-line" >
          <div className="horizontal-rule"></div>
          <div id="text">Or</div>
        </div >
        <div className="row justify-content-center">
          <Facebookbutton userData={this.state} />
          <Googlebutton userData={this.state} />
        </div>
      </section >
    );
  }
}

export default SignUpBox
