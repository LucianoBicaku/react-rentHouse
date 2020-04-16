import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'

export default class Facebookbutton extends Component {
    responseFacebook = response => {
        console.log(response);
        this.setState({
            isLoggedIn: true,
            userID: response.userID,
            name: response.name,
            email: response.email,
            // picture: response.picture.data.url
        });
    };
    render() {
        return (
            <>
                <FacebookLogin
                    appId="745642442637280"
                    autoLoad={false}
                    callback={this.responseFacebook}
                    render={renderProps => (
                        <input
                            type="image"
                            name="facebook-button"
                            className="facebook-button"
                            src={require("../SignLogin/facebook.png")}
                            alt="Login with facebook"
                            onClick={renderProps.onClick} />
                    )}
                />
            </>
        )
    }
}
