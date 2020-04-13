import React, { Component } from "react";
import "./signup.css";
import Facebookbutton from './Facebookbutton';
import Googlebutton from './Googlebutton';

class SignUpBox extends Component {
  state = {
    isLoggedIn: false,
    userId: '',
    name: '',
    email: '',
    picture: ''
  }
  render() {
    return (
      <section className="container-fluid signup">
        <form className="form-horizontal">
          <section className="row">
            <div className="col-6">
              <div className="form-group">
                <div className="">
                  <label htmlFor="name" className="label">Username</label>
                  <input type="text" className="form-control" id="name" required={true} />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="dateofbirth" className="label">Date of Birth</label>
                <input type="date" className="form-control" id="dateofbirth" />
              </div>
              <div className="form-group">
                <label htmlFor="inputPassword3" className="label" required={true}>Password</label>
                <input type="password" className="form-control" id="inputPassword3" />
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label htmlFor="inputEmail3" className="label" required={true}>E-mail</label>
                <input type="email" className="form-control" id="inputEmail3" />
              </div>
              <div className="my-form-group">
                <label className="radio-container">Male
                  <input type="radio" name="radio" />
                  <span className="checkmark"></span>
                </label>
                <label className="radio-container">Female
                  <input type="radio" name="radio" />
                  <span className="checkmark"></span>
                </label>
                <label className="radio-container">Other
                  <input type="radio" name="radio" />
                  <span className="checkmark"></span>
                </label>
              </div>
              <div className="form-group">
                <label htmlFor="confirmPassword" className="label" required={true}>Confirm Password </label>
                <input type="password" className="form-control" id="confirmPassword" />
              </div>
            </div>
          </section>

          <div className="row justify-content-center">
            <button type="submit" className="btn">Sign up</button>
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
      </section>
    );
  }
}


export default SignUpBox
