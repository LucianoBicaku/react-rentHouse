import React, { Component } from 'react'
import "./loginbox.css";
// import { facebook } from "./facebook.js"
window.fbAsyncInit = function () {
  window.FB.init({
    appId: '513613722875059',
    cookie: true,
    xfbml: true,
    version: 'v2.8'
  });

  window.FB.getLoginStatus(function (response) {
    statusChangeCallback(response);
  });
};
(function (d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) { return; }
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function statusChangeCallback(response) {
  if (response.status === 'connected') {
    console.log('Logged in and authenticated');
    // setElements(true);
    // testAPI();
  } else {
    console.log('Not authenticated');
    // setElements(false);
  }
}
class LogInBox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
          </div>
        </section>
      </section>
    )
  }
}
export default LogInBox
