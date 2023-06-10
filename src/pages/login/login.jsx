import React, { useContext } from 'react';
import './login.css';
import { AuthContext } from '../../Authentication/AuthContext';

export default function Login(){
    const {handleLogin, creds, handleInputChange, handleSubmit}  = useContext(AuthContext)
    return(
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <div className="loginLogo">Slaybook</div>
                    <div className="logoDesc">Connect with friends and world around you on slaybook.</div>

                </div>
                <div className="loginRight">
                <form className="login-form" onSubmit={handleSubmit}>
                <div className="loginBox">
                
                <input 
                placeholder="username" 
                className="loginaddress" 
                type="username"
                name="username"
                value={creds.username}
                onChange={handleInputChange}/>
                <input 
                placeholder="Password" 
                className="loginaddress"
                type="password"
                name="password"
                value={creds.password}
                onChange={handleInputChange}
                 />
                <button onClick={handleLogin} className="loginButton">Login</button>
                <span className="forgotPswrd">Forgot Password?</span>
                <button className="loginRegister">Create a new account</button>
                <button  type="submit" style={{ display: 'none' }}></button>
                
                </div>
                </form>
                

                </div>
            </div>
        </div>
    )
}