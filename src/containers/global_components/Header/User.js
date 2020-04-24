import userimg from "../../../img/user.svg";
import userimgblue from "../../../img/userblue.svg"
import React, { Component } from "react";

export class User extends Component {
  state = {
    dropdownShow: false,
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
            width="50px"
            height="50px"
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
                style={{ width: "100%" }}
                className="list-group-item list-group-item-action"
                onClick={this.props.logout}
              >
                Log Out
              </button>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}
const loginContainer = {
  position: "relative",
  width: "300px",
};
const dropdown = {
  position: "absolute",
  width: "100%",
  padding: "7px 0",
};
const style = {
  display: "flex",
  justifyContent: "center",
  marginRight: "30px",
};
const nameStyle = {
  marginRight: "20px",
  color: "white",
  textShadow: "0px 5px 3px #00000029",
  fontFamily: '"Barlow", sans-serif',
  fontSize: "32px",
  fontWeight: "100",
};

export default User;
