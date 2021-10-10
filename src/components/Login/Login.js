import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const {googleSignIn} = useAuth();

    
    return (
        <div className="login-form">
            <div className="login">
                <h2>Login</h2>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder="Enter Your Email"/>
                    <br /><br />
                    <input type="password" name="" id="" placeholder="Enter Your Password" />
                    <br /><br />
                    <input type="submit" value="Submit" />
                </form>
                <br />
                <p>New in ema-john? <Link to="/register">Please Register Now!</Link></p>
                <div>---------------*OR*----------------</div>
                <br />
                <button 
                className="btn-regular"
                onClick={googleSignIn}
                > Use Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;