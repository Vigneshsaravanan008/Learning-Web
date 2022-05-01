import React, { useState } from 'react'
import { Link } from "react-router-dom";
import '../assets/css/dashlite.css';
import '../assets/css/theme.css';
import Header from '../Layouts/Header';

function Login() {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [emailerror,setEmailError]=useState('');
    const [passworderror,setPasswordError]=useState('');

    const  validate=()=>{
        if(!email)
        {
            let Error="Email is Required";
            setEmailError(Error);
            return false;
        }
        if(!password)
        {
            let Error="Password is Required";
            setPasswordError(Error);
            return false;
        }
        return true;
    }

    const Login=(e)=>{
        e.preventDefault();
        const is_validate=validate();
        if(is_validate)
        {

        }
    }

    return (
        <>
        <Header/>
        <div className="nk-block nk-block-middle nk-auth-body  wide-xs"> 
            <div className="card card-bordered">
                <div className="card-inner card-inner-lg">
                    <div className="nk-block-head">
                        <div className="nk-block-head-content">
                            <h4 className="nk-block-title">Sign-In</h4>
                            <div className="nk-block-des">
                                <p>Access the CryptoLite panel using your email and passcode.</p>
                            </div>
                        </div>
                    </div>
                    <form>
                        <div className="form-group">
                            <div className="form-label-group">
                                <label className="form-label">Email </label>
                            </div>
                            <div className="form-control-wrap">
                                <input type="email" className="form-control form-control-lg" name="email" id="default-01" onChange={e => setEmail(e.target.value)}  value={email} placeholder="Enter your email address or username"/>
                                <span style={{ color:"red"}}>{emailerror}</span>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="form-label-group">
                                <label className="form-label">Password</label>

                                <Link className="link link-primary link-sm" to="html/pages/auths/auth-reset-v2.html">Forgot Code?</Link>
                            </div>
                            <div className="form-control-wrap">
                                <Link to="#" className="form-icon form-icon-right passcode-switch lg" data-target="password">
                                    <em className="passcode-icon icon-show icon ni ni-eye"></em>
                                    <em className="passcode-icon icon-hide icon ni ni-eye-off"></em>
                                </Link>
                                <input type="password" className="form-control form-control-lg" id="password" name="password" onChange={e => setPassword(e.target.value)} value={password} placeholder="Enter your passcode"/>
                                <span style={{ color:"red"}}>{passworderror}</span>
                            </div>
                        </div>
                        <div className="form-group">
                            <button  onClick={(e) => {Login(e);}} className="btn btn-lg btn-primary btn-block">Sign in</button>
                        </div>
                    </form>
                    <div className="form-note-s2 text-center pt-4"> New on our platform? <Link to="/signup">Create an account</Link>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Login;