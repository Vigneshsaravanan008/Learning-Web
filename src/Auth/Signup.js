import React from 'react';
import { Link } from "react-router-dom";
import Header from '../Layouts/Header';
function Signup() {
  return (
    <div>
        <Header/>
        <div className="nk-block nk-block-middle nk-auth-body wide-xs">
            <div className="card card-bordered">
                <div className="card-inner card-inner-lg">
                    <div className="nk-block-head">
                        <div className="nk-block-head-content">
                            <h4 className="nk-block-title">Register</h4>
                            <div className="nk-block-des">
                                <p>Create New Dashlite Account</p>
                            </div>
                        </div>
                    </div>
                    <form action="html/pages/auths/auth-success-v2.html">
                        <div className="form-group">
                            <label className="form-label" for="name">Name</label>
                            <div className="form-control-wrap">
                                <input type="text" className="form-control form-control-lg" id="name" placeholder="Enter your name"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="form-label" for="email">Email or Username</label>
                            <div className="form-control-wrap">
                                <input type="text" className="form-control form-control-lg" id="email" placeholder="Enter your email address or username"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="form-label" for="password">Passcode</label>
                            <div className="form-control-wrap">
                                <a href="#" className="form-icon form-icon-right passcode-switch lg" data-target="password">
                                    <em className="passcode-icon icon-show icon ni ni-eye"></em>
                                    <em className="passcode-icon icon-hide icon ni ni-eye-off"></em>
                                </a>
                                <input type="password" className="form-control form-control-lg" id="password" placeholder="Enter your passcode"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="custom-control custom-control-xs custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="checkbox" required/>
                                <label className="custom-control-label" for="checkbox">I agree to Dashlite <a href="#">Privacy Policy</a> &amp; <a href="#"> Terms.</a></label>
                            </div>
                        </div>
                        <div className="form-group">
                            <button className="btn btn-lg btn-primary btn-block">Register</button>
                        </div>
                    </form>
                    <div className="form-note-s2 text-center pt-4"> Already have an account? <Link to="/"><strong>Sign in instead</strong></Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signup