import React from 'react';
import './login.css';

export default function Login(){
    return(
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <div className="loginLogo">Slaybook</div>
                    <div className="logoDesc">Connect with friends and world around you on slaybook.</div>

                </div>
                <div className="loginRight">
                <div className="loginBox">
                <input placeholder="Email or Phone Number" className="loginaddress" />
                <input placeholder="Password" className="loginaddress" />
                <button className="loginButton">Login</button>
                <span className="forgotPswrd">Forgot Password?</span>
                <button className="loginRegister">Create a new account</button>

                </div>
                

                </div>
            </div>
        </div>
    )
}