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
    console.log(localStorage.getItem('token'));
    axios
      .get(
        "https://rent-project.herokuapp.com/users/5ea2afe318d7ce0017423414",//shembull kerkese qe kekon auth
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem('token')
          }
        }
      )
      .then(res => {
        console.log(res)
        if (res.ok) {
          //bej vep
        }
      })
      .catch(err => {
        //kur ka skadu token e ben kerkesen me refresh token ne header dhe 
        // illoj si kerkesa siper merr tdhenat pstj ben thirrjen e tjeter per te fresku ntoken-at
        console.log(JSON.stringify(err.data))
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
            console.log("second response" + console.log(JSON.stringify(res.data)))
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
                  console.log(res)
                  if (res.ok) {
                    localStorage.setItem("token", res.data.token);
                    localStorage.setItem("refreshtoken", res.data.refreshtoken);
                    console.log("tokens changed");
                  }
                })
            }
          })
          .catch(err => {
            // this.setState={!this.state.loggedin}
            // bej ndnj veprim psh user is not logged in please login 
          })
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
