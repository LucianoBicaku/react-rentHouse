import React, { Component } from "react";
import "./signup.css";
import Facebookbutton from './Facebookbutton';
import Googlebutton from './Googlebutton';

class SignUpBox extends Component {
  state = {
    errors: [],
    username: '',
    email: '',
    birthday: '',
    password: '',
    confirmpass: '',
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
    this.clearValidationErr("user");
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
  onGenderChange(e) {
    this.setState({ gender: e.target.value });
    this.clearValidationErr("gender");
  }

  handleConfirmPassword(e) {
    // if (e.target.value.length === 0) {
    //   this.setState({ confirmpass: e.target.value });
    //   this.clearValidationErr("confirmpassword");
    //   return false;
    // }
    // else if (this.state.password.substr(0, e.target.value.length) !== e.target.value) {
    //   this.setState({ confirmpass: e.target.value });
    //   this.showValidationErr("confirmpassword", "Passwords must be the same");
    //   return false;
    // }
    // else {
    //   this.setState({ confirmpass: e.target.value });
    //   this.clearValidationErr("confirmpassword");
    //   return true;
    // }
    this.setState({ confirmpass: e.target.value });
    this.clearValidationErr("password");
  }

  passwordValidation(password) {
    var message = "";
    if (password.length === 0) {
      message = "Password Cannot be empty!";
    }
    else if (password.length > 0 && password.length < 6) {
      message = "6 Characters minimum!";
    }
    else if (!password.match(/[0-9]/g)) {
      message = "Password should contain a number.";
    }
    return message;
  }
  userNameValidation(username) {
    var message = "";
    if (username === "") {
      this.showValidationErr("user", "Username is required!");
    }
    else if (username.length > 0 && username.length < 4) {
      this.showValidationErr("user", "Username too short")
    }
    return message;
  }
  emailValidation(email) {
    var re = /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase()) ? '' : "Email is not valid!";
  }
  submitSignUp = (e) => {
    e.preventDefault();
    const { username, email, birthday, password, confirmpass, gender } = this.state;
    var errorstatus;
    const userdata = {
      'email': this.state.email,
      'password': this.state.password,
      'confirmpass': this.state.confirmpass,
      'username': this.state.username,
      'birthday': this.state.birthday,
      'gender': this.state.gender
    }
    var usernameErr, emailErr, passwordErr;
    var check = true;
    usernameErr = this.userNameValidation(username);
    if (usernameErr.length !== 0) {
      check = false;
      this.showValidationErr("password", usernameErr);
    }
    emailErr = this.emailValidation(email);
    if (emailErr.length !== 0) {
      check = false;
      this.showValidationErr("email", "Email is not valid.");
    }
    passwordErr = this.passwordValidation(password);
    if (passwordErr.length !== 0) {
      check = false;
      this.showValidationErr("password", passwordErr)
    }
    if (birthday === "") {
      check = false;
      this.showValidationErr("birthday", "Chose your date of birth!");
    }
    if (confirmpass === "") {
      check = false;
      this.showValidationErr("confirmpassword", "Confirm password cannot be empty!");
    }
    console.log(confirmpass + "+" + password);
    if (confirmpass !== password) {
      console.log(confirmpass + "+" + password);
      check = false;
      this.showValidationErr("confirmpassword", "Paswords must be the same!");
    }
    if (gender === "") {
      check = false;
      this.showValidationErr("gender", "Chose gender!");
    }
    if (check) {
      fetch("https://rent-project.herokuapp.com/register", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(userdata)
      })
        .then((response) => {
          if (response.status === 200 || response.status === 400) {
            errorstatus = response.status;
            return response.json()
          }
        }
        )
        .then(res => {
          console.log(errorstatus);
          console.log(res);
          if (errorstatus === 200) {
            localStorage.setItem("username", res.username);
            localStorage.setItem("userid", res._id);
            localStorage.setItem("token", res.token);
            localStorage.setItem("refreshtoken", res.refreshtoken);
            this.props.redirect(res.username);
          }
          else if (errorstatus === 400) {
            var error_message = res.message.split(',')[0];
            var error_title = error_message.split(' ')[0].toLowerCase();
            this.showValidationErr(error_title, error_message);
          }
        }
        )
        .catch(err =>
          console.log(err)
        )
    }
  }
  render() {

    let usernameErr = null, passwordErr = null, emailErr = null, birthdayErr = null, confirmpassErr = null, genderErr = null;
    for (let err of this.state.errors) {
      if (err.elm === "user") {
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
      if (err.elm === "gender") {
        genderErr = err.msg;
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
                  <input type="text" className="form-control" id="name" onChange={this.onUsernameChange.bind(this)} autoComplete="off"
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
                <input type="email" className="form-control margin" id="inputEmail3" onChange={this.onEmailChange.bind(this)} autoComplete="off" />
                <div className={emailErr ? "alert alert-danger alert-padding-left" : ''}>
                  <div className="error">{emailErr ? emailErr : ''}</div>
                </div>
              </div>
              <div className="my-form-group" onChange={this.onGenderChange.bind(this)}>
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
                <div className="gender-cl">
                  <div className={genderErr ? "alert alert-danger gender" : ''}>
                    <div className="error">{genderErr ? genderErr : ''}</div>
                  </div>
                </div>
              </div>
              <div className="form-group margin-right">
                <label htmlFor="confirmPassword" className="label" >Confirm Password </label>
                <input type="password" className="form-control margin alert-padding-left" id="confirmPassword"
                  onChange={this.handleConfirmPassword.bind(this)} />
                <div className={confirmpassErr ? "alert alert-danger alert-padding-left" : ''}>
                  <div className="error">{confirmpassErr ? confirmpassErr : ''}</div>
                </div>
              </div>
            </div>
          </section>

        </form>
        <div className=" row justify-content-center">
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
