import React, { Component } from "react";
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";
class SignUp extends Component {
  state = {
    isLoggedIn: false,
    userId: '',
    name: '',
    email: '',
    picture: ''
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
      <section className="container-fluid">
        <section className="row justify-content-center">
          <form className="form-horizontal form-container">
            <div className="form-group">
              <label htmlFor="name" className="col-sm-2 control-label">Name</label>
              <div className="col-sm-12">
                <input type="text" className="form-control" id="name" placeholder="Name" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputEmail3" className="col-sm-2 control-label">Email</label>
              <div className="col-sm-12">
                <input type="email" className="form-control" id="inputEmail3" placeholder="Email" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputPassword3" className="col-sm-2 control-label">Password</label>
              <div className="col-sm-12">
                <input type="password" className="form-control" id="inputPassword3" placeholder="Password" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword" className="col-sm-2 control-label">Confirm Password</label>
              <div className="col-sm-12">
                <input type="password" className="form-control" id="confirmPassword" placeholder="Password" />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-offset-2 col-sm-12">
                <button type="submit" className="btn  btn-block">Sign in</button>
              </div>
            </div>
            <div className="form-group break-line">
              <div className="horizontal-rule"></div>
              <div id="text">or</div>
            </div>
            <div className="login">
              <div className="row facebook justify-content-center">{fbContent}</div>
              {/* <div className="google">{googleContent}</div> */}
            </div>
          </form>
        </section>
      </section>
    );
  }
}

export default SignUp;
