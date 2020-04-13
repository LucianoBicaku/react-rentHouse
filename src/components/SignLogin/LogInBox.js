import React, { Component } from 'react'
import "./loginbox.css";
import FacebookLogin from "react-facebook-login"
// import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'

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
  responseFacebook = response => {
    console.log(response);

    this.setState({
      isLoggedIn: true,
      userID: response.userID,
      name: response.name,
      email: response.email,
      picture: response.picture.data.url
    });
  };
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
            <input
              type="image"
              name="facebook-button"
              className="facebook-button"
              src={require("../SignLogin/facebook.png")}
              alt="Login with facebook"
            />
            <input
              type="image"
              name="google-button"
              className="google-button"
              src={require("../SignLogin/google.png")}
              alt="Logn in with google" />

            {/* <FacebookLogin
              appId="513613722875059"
              autoLoad
              callback={this.responseFacebook.bind(this)}
              render={renderProps => (
                <input
                  type="image"
                  name="google-button"
                  className="google-button"
                  src={require("../SignLogin/google.png")}
                  alt="Logn in with google"
                  onClick={renderProps.onClick} />
              )}
            /> */}
            <FacebookLogin
              appId="745642442637280"
              autoLoad={true}
              fields="name,email,picture"
              onClick={this.componentClicked}
              callback={this.responseFacebook} />,
          </div>
        </section>
      </section>
    )
  }
}
export default LogInBox
