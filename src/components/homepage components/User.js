import userimg from "./img/user.svg";
import React, { Component } from 'react'


export class User extends Component {
    render() {
        return (
            <div style={style}>
                <h2 style={nameStyle}>{this.props.user}Resti Gjidia</h2>
                <input type="image" width="50px" height="50px" src={userimg} alt="Submit"></input>
            </div>
        )
    }
}
const style = {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '0px'
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


