import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
class LogIn extends Component {
    render() {
        return (
            <section className="container-fluid">
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
                        <div className="row form-group">
                            <div className=" col-sm-12 justify-content-center">
                                <button type="submit" className="btn">Log in</button>
                            </div>
                        </div>
                    </form>
                </section>
            </section>
        )
    }
}


export default LogIn;
