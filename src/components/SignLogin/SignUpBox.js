import React, { Component } from "react";
import FacebookLogin from 'react-facebook-login';
import "./signup.css";
// import 'bootstrap/dist/css/bootstrap.min.css';

class SignUpBox extends Component {
  state = {
    isLoggedIn: false,
    userId: '',
    name: '',
    email: '',
    picture: ''
  }
  submitRegister(e) {
  }
  responseFacebook = response => {
    // this.setState({
    //   isLoggedIn: true,
    //   userId: response.userId,
    //   name: response.name,
    //   email: response.email,
    //   picture: response.picture.data.url
    // });
    console.log(response);
  };
  componentClicked = () => console.log("clicked");

  responseGoogle = response => {
    console.log(response);
  };
  render() {

    let fbContent, googleContent;

    if (this.state.isLoggedIn) {
      // googleContent = null;
      fbContent = null;
    } else {
      // googleContent = (<GoogleLogin
      //   clientId="167174526204-4j9traaqfnh7ovugg5q9rvghe3l8npg8.apps.googleusercontent.com"
      //   autoLoad={true}
      //   buttonText="Login"
      //   onSuccess={this.responseGoogle}
      //   onFailure={this.responseGoogle}
      //   cookiePolicy={'single_host_origin'}
      // />)

      fbContent = (<FacebookLogin
        appId="513613722875059"
        autoLoad={true}
        fields="name,email,picture"
        onClick={this.componentClicked}
        callback={this.responseFacebook} />);
    }
    return (
      <section className="container-fluid signup">
        <form className="form-horizontal">
          <section className="row">
            <div className="col-6">
              <div className="form-group">
                <div className="">
                  <label htmlFor="name" className="label">Username</label>
                  <input type="text" className="form-control" id="name" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="dateofbirth" className="label">Date of Birth</label>
                <input type="date" className="form-control" id="dateofbirth" />
              </div>
              <div className="form-group">
                <label htmlFor="inputPassword3" className="label">Password</label>
                <input type="password" className="form-control" id="inputPassword3" />
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label htmlFor="inputEmail3" className="label">E-mail</label>
                <input type="email" className="form-control" id="inputEmail3" />
              </div>
              <div className="my-form-group options">
                <label className="radio-inline"><input type="radio" name="optradio" />Male</label>
                <label className="radio-inline"><input type="radio" name="optradio" />Female</label>
                <label className="radio-inline"><input type="radio" name="optradio" />Other</label>
              </div>
              <div className="form-group">
                <label htmlFor="confirmPassword" className="label">Confirm Password</label>
                <input type="password" className="form-control" id="confirmPassword" />
              </div>
            </div>
          </section>

          <div className="form-group row justify-content-center">
            <button type="submit" className="btn" onClick={this.submitRegister.bind(this)}>Sign in</button>
          </div>
          <div className="form-group break-line">
            <div className="horizontal-rule"></div>
            <div id="text">Or</div>
          </div>
          <div className="row justify-content-center">
            <input
              type="image"
              name="facebook-button"
              className="facebook-button"
              src={require("../SignLogin/facebook.png")}
              alt="text" />
            <input
              type="image"
              name="facebook-button"
              className="google-button"
              src={require("../SignLogin/google.png")}
              alt="text" />
          </div>
        </form>
      </section>
    );
  }
}


export default SignUpBox
