import React, { Component } from 'react'
import "./loginbox.css";

class LogInBox extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    submitLogin(e) {

    }
    render() {
        return (
            <section className="container-fluid">
                <section className="row justify-content-center">
                    <form className="form-horizontal form-container">
                        <div className="form-group">
                            <label htmlFor="inputEmail" className="label">Email</label>
                            <input type="email" className="form-control" id="inputEmail" />
                        </div>
                        <div className="form-group my-form-group">
                            <label htmlFor="inputPassword" className="label">Password</label>
                            <input type="password" className="form-control" id="inputPassword" />
                        </div>
                        <input type="checkbox" className="checkbox" /> Remember me
                        <div className="form-group row justify-content-center">
                            <button type="submit" className="btn btn-block" onClick={this.submitLogin.bind(this)}>Login</button>
                        </div>
                        <div className="row form-group break-line">
                            <div className="horizontal-rule"></div>
                            <div id="text">or</div>
                        </div>
                    </form>
                </section>
            </section>
        )
    }
}
export default LogInBox
