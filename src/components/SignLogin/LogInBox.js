import React, { Component } from 'react'
import "./loginbox.css";
import GoogleLogin from 'react-google-login';
import Facebookbutton from './Facebookbutton';
import Googlebutton from './Googlebutton';

class LogInBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      userID: "",
      name: "",
      email: "",
      picture: ""
    };
  }
  render() {
    return (
      <section className="container-fluid">
        <section className="row justify-content-center">
          <form className="form-horizontal">
            <div className="form-group">
              <label htmlFor="inputEmail" className="label">Email</label>
              <input type="email" className="form-control" id="inputEmail" />
            </div>
            <div className="form-group my-form-group">
              <label htmlFor="inputPassword" className="label">Password</label>
              <input type="password" className="form-control" id="inputPassword" />
            </div>
            <input type="checkbox" className="checkbox" /> Remember me
                        <div className="form-group row justify-content-center">
              <button type="submit" className="btn btn-block" >Login</button>
              {/*onClick={this.submitLogin.bind(this)}*/}
            </div>
          </form>
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
