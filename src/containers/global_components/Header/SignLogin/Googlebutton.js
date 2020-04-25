import GoogleLogin from 'react-google-login';
import React, { Component } from 'react'

export default class Googlebutton extends Component {
    responseGoogle = response => {
        console.log(response);
    }
    render() {
        return (
            <>
                <GoogleLogin
                    clientId="745682602358-v3mud47raeemkke8kovme97j3i357mot.apps.googleusercontent.com"
                    autoLoad={false}
                    render={renderProps => (
                        <input
                            type="image"
                            name="google-button"
                            className="google-button"
                            src={require("../SignLogin/google.png")}
                            alt="Logn in with google" />

                    )}
                    buttonText="Login"
                    // onSuccess={this.responseGoogle}
                    // onFailure={this.responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
            </>
        )
    }
}
