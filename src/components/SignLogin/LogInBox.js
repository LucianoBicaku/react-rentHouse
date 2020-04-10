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
                                <input type="email" className="form-control" id="inputEmail" placeholder="Email" />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-12">
                                <input type="password" className="form-control" id="inputPassword" placeholder="Password" />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="checkbox">
                                <label>
                                    <input type="checkbox" /> Remember me
                                        </label>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-offset-2 col-sm-12">
                                <button type="submit" className="btn  btn-block" onClick={this.submitLogin.bind(this)}>Login</button>
                            </div>
                        </div>
                    </form>
                </section>
            </section>
        )
    }
}
export default LogInBox
