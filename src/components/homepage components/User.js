import userimg from "./img/user.svg";
import React, { Component } from 'react'
import { Dropdown } from "reactstrap";

export class User extends Component {
    state = {
        dropdownShow: false
    }
    deleteAllCookies() {
        var cookies = document.cookie.split(";");
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i];
            var eqPos = cookie.indexOf("=");
            var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
            document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
        }
    }
    show = () => {
        this.setState({ dropdownShow: !this.state.dropdownShow })
    }
    render() {
        return (
            <div style={loginContainer}>
                <div style={style}>
                    <h2 style={nameStyle}>{this.props.username}</h2>
                    <input
                        type="image"
                        width="50px" height="50px"
                        src={userimg} alt="Submit"
                        onClick={this.show}
                    ></input>
                </div>
                <div style={dropdown}>
                    {this.state.dropdownShow ?
                        <div className="list-group">
                            {/* <a

                                href="#" className="list-group-item list-group-item-action active"
                                onClick={this.props.logout}
                            >
                                Log out
                            </a> */}
                            <button type="button" style={{ width: '100%' }}
                                className="list-group-item list-group-item-action"
                                onClick={this.props.logout}
                            >Log Out</button>
                        </div>
                        : null}
                </div>
            </div>
        )
    }
}
const loginContainer = {
    position: 'relative',
    width: '300px'
}
const dropdown = {
    position: 'absolute',
    width: '100%',
    padding: '7px 0',
}
const style = {
    display: 'flex',
    justifyContent: 'center',
    marginRight: '30px'
}
const nameStyle = {
    marginRight: '20px',
    color: 'white',
    textShadow: '0px 5px 3px #00000029',
    fontFamily: '"Barlow", sans-serif',
    fontSize: '32px',
    fontWeight: '100'
}

export default User;


