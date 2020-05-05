import userimg from "../../../img/user.svg";
import userimgblue from "../../../img/userblue.svg"
import React, { Component } from "react";
import axios from 'axios';

export class User extends Component {
  state = {
    dropdownShow: false,
    userIconColor: ''
  };
  show = () => {
    this.setState({ dropdownShow: !this.state.dropdownShow });
  };
  // test
  requests() {
    // fetch("https://rent-project.herokuapp.com/users/5ea2afe318d7ce0017423414", {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJlc3RpZ2ppZGlhQG91dGxvb2suY29tIiwiX2lkIjoiNWU5Y2U0ODJjN2M0NDA0NTk0Yzk3MTlhIiwiaWF0IjoxNTg4NjEzMDYyLCJleHAiOjE1ODg2MTM5NjJ9.Zox2SZO_8IKQklwpY0SNrDXzJ_ynsBZYRwwp9U54DSA"
    //   }
    // })
    //   .then(res => 
    //     res.json())
    //   .then(res => console.log(res));
    axios(
      "https://rent-project.herokuapp.com/users/5ea2afe318d7ce0017423414",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem('token')
        }
      }
    )
      .then(res => {
        console.log(res.data)
        if (res.ok) {
          //bej vep
          console.log(res.data)
        }
      })


      .catch(err => {
        console.log(err);
        if (err.data.message === "Failed to authenticate token") {
          console.log("count");
          //kur ka skadu token e ben kerkesen me refresh token ne header dhe 
          // illoj si kerkesa siper merr tdhenat pstj ben thirrjen e tjeter per te fresku ntoken-at
          axios(
            "https://rent-project.herokuapp.com/users/5ea2afe318d7ce0017423414",
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem('refreshtoken')
              }
            }
          )
            .then(res => {
              if (res.ok) {
                //bej vep
                axios(
                  "https://rent-project.herokuapp.com/refreshtokens/" + localStorage.getItem('email'),
                  {
                    method: "GET",
                    headers: {
                      "Content-Type": "application/json",
                      Authorization: "Bearer " + localStorage.getItem('refreshtoken')
                    }
                  }
                )
                  .then(res => {
                    if (res.ok) {
                      localStorage.setItem("token", res.data.token);
                      localStorage.setItem("refreshtoken", res.data.refreshtoken);
                      console.log("tokens changed");
                    }
                  })
              }
              console.log("second response" + res)
            })
        }
      })
  }

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
                style={this.props.userimagecolor === 'blue' ? { backgroundColor: 'orange', width: "100%" } : { width: "100%" }}
                className="list-group-item list-group-item-action"
                onClick={this.props.logout}
              >
                Log Out
              </button>
              <button onClick={this.requests}>
                test
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
