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
            <section className="container">
                <section className="row justify-content-center">
                    <form className="form-horizontal form-container">
                        <div className="form-group">
                            <div className="col-sm-12">
                                <label htmlFor="inputEmail" className="label">Email</label>
                                <input type="email" className="form-control" id="inputEmail" />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-12">
                                <label htmlFor="inputPassword" className="label">Password</label>
                                <input type="password" className="form-control" id="inputPassword" />
                            </div>
                        </div>
                        <div className="form-group">
                            <input type="checkbox" className="checkbox" /> Remember me
                        </div>
                        <div className="form-group">
                            <div className="col-12">
                                <button type="submit" className="btn btn-block" onClick={this.submitLogin.bind(this)}>Login</button>
                            </div>
                        </div>
                    </form>
                </section>
            </section>
        )
    }
}
export default LogInBox
