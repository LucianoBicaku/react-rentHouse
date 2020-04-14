import React, { Component } from "react";
import "./signup.css";
import Facebookbutton from './Facebookbutton';
import Googlebutton from './Googlebutton';

class SignUpBox extends Component {
  state = {
    errors: [],
    isLoggedIn: false,
    username: '',
    email: '',
    dateofbirth: '',
    password: '',
    gender: '',

  }
  showValidationErr(elm, msg) {
    this.setState(prevState => ({ errors: [...prevState.errors, { elm, msg }] }))
  }
  clearValidationErr(elm) {
    this.setState(prevState => {
      let newArr = [];
      for (let err of prevState.errors) {
        if (elm !== err.elm) {
          newArr.push(err);
        }
      }
      return newArr;
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
  setGender(e) {
    this.setState({ gender: e.target.value });
  }

  handleConfirmPassword(e) {
    if (this.state.password.substr(0, e.target.value.length) !== e.target.value) {
      console.log("wrong password")
    }
  }
  submitSignUp(e) {
    if (this.state.username === "") {
      this.showValidationErr("username", "Username Cannot be empty!");
    }
    if (this.state.email === "") {
      this.showValidationErr("email", "Email Cannot be empty!");
    }
    if (this.state.password === "") {
      this.showValidationErr("password", "Password Cannot be empty!");
      this.showValidationErr("password", "Confirm Password Cannot be empty!");
    }
  }
  render() {
    let usernameErr = null, passwordErr = null, emailErr = null;
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
                    required={true} />
                  <div class="alert alert-danger" role="alert">
                    <div className="error">{usernameErr ? usernameErr : ''}</div>
                  </div>
                </div>
              </div>
              <div className="form-group has-feedback">
                <label htmlFor="dateofbirth" className="label">Date of Birth</label>
                <input type="date" className="form-control date-picker" id="dateofbirth" />
              </div>
              <div className="form-group">
                <label htmlFor="inputPassword3" className="label">Password</label>
                <input type="password" className="form-control" id="inputPassword3" onChange={this.onPasswordChange.bind(this)}

                />
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label htmlFor="inputEmail3" className="label">E-mail</label>
                <input type="email" className="form-control" id="inputEmail3" onChange={this.onEmailChange.bind(this)} required={true} />
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
              <div className="form-group">
                <label htmlFor="confirmPassword" className="label" required={true} >Confirm Password </label>
                <input type="password" className="form-control" id="confirmPassword"
                  onChange={this.handleConfirmPassword.bind(this)} required={true} />
              </div>
            </div>
          </section>

          <div className="form-group row justify-content-center">
            <button type="submit" className="btn" onClick={this.submitSignUp.bind(this)}>Sign up</button>
          </div>
        </form>
        <div className="form-group break-line">
          <div className="horizontal-rule"></div>
          <div id="text">Or</div>
        </div>
        <div className="row justify-content-center">
          <Facebookbutton userData={this.state} />
          <Googlebutton userData={this.state} />
        </div>
      </section >
    );
  }
}


export default SignUpBox
