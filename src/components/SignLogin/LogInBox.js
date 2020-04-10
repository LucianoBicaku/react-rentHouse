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
            // <section className="container-fluid">
            <section className="row justify-content-center">
                <form className="form-horizontal form-container">
                    <div className="form-group">
                        <label htmlFor="inputEmail" className="col-sm-2 control-label">Email</label>
                        <div className="col-sm-12">
                            <input type="email" className="form-control" id="inputEmail" placeholder="Email" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputPassword" className="col-sm-2 control-label">Password</label>
                        <div className="col-sm-12">
                            <input type="password" className="form-control" id="inputPassword" placeholder="Password" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-12">
                            <div className="checkbox">
                                <label>
                                    <input type="checkbox" /> Remember me
                                        </label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-12">
                            <button type="submit" className="btn  btn-block" onClick={this.submitLogin.bind(this)}>Log in</button>
                        </div>
                    </div>
                </form>
            </section>
            // </section>
        )
    }
}
export default LogInBox
