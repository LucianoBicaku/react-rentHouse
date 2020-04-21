import React, { Component } from 'react'
import "./loginbox.css";
import Facebookbutton from './Facebookbutton';
import Googlebutton from './Googlebutton';
import jwt_decode from "jwt-decode"
class LogInBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: [],
      redirect: true,
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
      var resultstatus;
      const data = {
        'password': this.state.password,
        'email': this.state.email
      }
      var base = 'https://rent-project.herokuapp.com/';
      fetch(base + 'login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(result => {
          if (result.status === 200 || result.status === 400);
          resultstatus = result.status;
          return result.json();
        })
        .then(result => {
          if (resultstatus === 200) {
            var result_decoded = jwt_decode(result.token);
            var user_id = result_decoded._id;
            console.log(user_id);
            fetch(base + 'users/' + user_id, {
              method: 'GET',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + result.token,
                'Host': 'api.producthunt.com'
              }
            })
              .then(res => res.json())
              .then(res => {
                console.log(res);
                this.props.redirect(res.username)
              })
          }
          else if (resultstatus === 400) {
            this.showValidationErr('password', "Incorrect email/password!");
          }
        })
    }
  }
  //         GetData(base+'users/:' + user_id, result.token)
  //           .then((userData) => {
  //             this.props.redirect(userData.username);
  //           })
  //         sessionStorage.setItem('userdata', result);
  //         document.cookie = ('userdata=' + result.token);
  //         this.setState({ redirectToHome: true });
  //       }
  //     })
  //     .catch(err => {
  //       this.showValidationErr("login", "Incorrect email/password");
  //       console.log(err);
  //     })
  // }
  //   PostData('login', { password, email })
  //     .then((result) => {
  //       console.log(result);
  //       if (result) {
  //         var result_decoded = jwt_decode(result.token);
  //         var user_id = result_decoded._id;
  //         GetData('/users/:' + user_id, result.token)
  //           .then((userData) => {
  //             this.props.redirect(userData.username);
  //           })
  //         sessionStorage.setItem('userdata', result);
  //         document.cookie = ('userdata=' + result.token);
  //         this.setState({ redirectToHome: true });
  //       }

  //     })
  //     .catch(err => {
  //       this.showValidationErr("login", "Incorrect email/password");
  //       console.log(err);
  //     })


  //  getCookie(c_name) {
  //         var c_start, c_end;
  //         if (document.cookie.length > 0) {
  //           c_start = document.cookie.indexOf(c_name + "=");
  //           if (c_start !== -1) {
  //             c_start = c_start + c_name.length + 1;
  //             c_end = document.cookie.indexOf(";", c_start);
  //             if (c_end === -1) c_end = document.cookie.length;
  //             return unescape(document.cookie.substring(c_start, c_end));
  //           }
  //         }
  //         return "";
  //       }

  render() {
    let passwordErr = null, emailErr = null, loginErr = null;
    // if (this.state.redirect) {
    //   return (<Redirect to={'/about'} />)
    // }
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
                <label htmlFor="inputEmail" className="label" >E-mail</label>
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
