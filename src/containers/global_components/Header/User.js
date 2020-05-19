import userimg from "../../../img/user.svg";
import userimgblue from "../../../img/userblue.svg"
import React, { Component } from "react";
// import axios from 'axios';

export class User extends Component {
  state = {
    dropdownShow: false,
    userIconColor: ''
  };
  show = () => {
    this.setState({ dropdownShow: !this.state.dropdownShow });
  };
  render() {
    return (
      <div style={loginContainer}>
        <div style={style}>
          <h2 style={nameStyle}>{this.props.username}</h2>
          <input
            type="image"
            width="20%"
            height="20%"
            src={this.props.userimagecolor === 'blue' ? userimgblue : userimg}
            alt="Submit"
            onClick={this.show}
          ></input>
        </div>
        <div style={dropdown}>
          {this.state.dropdownShow ? (
            <div className="list-group">
              <button
                type="button"
                style={this.props.userimagecolor === 'blue' ? { backgroundColor: 'orange', width: "100%" } : { width: "100%" }}
                className="list-group-item list-group-item-action"
                onClick={this.props.logout}
              >
                Log Out
              </button>
              {/* <button onClick={this.requests}>
                test
              </button> */}
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}


const loginContainer = {
  position: "relative",
  width: "15.1vw",
};
const dropdown = {
  position: "absolute",
  width: "100%",
  padding: "0.2vw 0",
};
const style = {
  display: "flex",
  justifyContent: "center",
  marginRight: "1.51vw",
};
const nameStyle = {
  marginRight: "1vw",
  color: "white",
  textShadow: "0px 0.25vw 0.15vw #00000029",
  fontFamily: '"Barlow", sans-serif',
  fontSize: "1.61vw",
  fontWeight: "100",
};

export default User;
