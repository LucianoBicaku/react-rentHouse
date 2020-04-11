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
        <form className="form-horizontal form-container">
          <section className="row">
            <div className="col-6">
              <div className="form-group">
                <div className="">
                  <label htmlFor="name" className="col-2 control-label label">UserName</label>
                  <input type="text" className="form-control" id="name" placeholder="Name" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="dateofbirth" className="col-2 control-label label">Date of Birth</label>
                <input type="date" className="form-control" id="dateofbirth" placeholder="Name" />
              </div>
              <div className="form-group">
                <label htmlFor="inputPassword3" className="col-2 control-label label">Password</label>
                <div className="">
                  <input type="password" className="form-control" id="inputPassword3" placeholder="Password" />
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label htmlFor="inputEmail3" className="col-2 control-label label">Email</label>
                <div className="">
                  <input type="email" className="form-control" id="inputEmail3" placeholder="Email" />
                </div>
              </div>
              <div className="form-group">
                <label className="radio-inline"><input type="radio" name="optradio" />Male</label>
                <label className="radio-inline"><input type="radio" name="optradio" />Female</label>
                <label className="radio-inline"><input type="radio" name="optradio" />Other</label>
              </div>
              <div className="form-group">
                <label htmlFor="confirmPassword" className="col-2 control-label label">Confirm Password</label>
                <div className="">
                  <input type="password" className="form-control" id="confirmPassword" placeholder="Password" />
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className=" col-sm-12">
                <button type="submit" className="btn  btn-block" onClick={this.submitRegister.bind(this)}>Sign in</button>
              </div>
            </div>
            <div className="form-group break-line">
              <div className="horizontal-rule"></div>
              <div id="text">or</div>
            </div>
            {/* <div className="login">
              <div className="row facebook justify-content-center">{fbContent}</div> */}
            {/* <div className="google">{googleContent}</div> */}
            {/* </div> */}
          </section>
        </form>
      </section>
    );
  }
}


export default SignUpBox
