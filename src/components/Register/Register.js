import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="login-form">
            <div className="login">
                <h2>Register: Create Account</h2>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder="Your Email" />
                    <br /><br />
                    <input type="password" name="" id="" placeholder="Your Password" />
                    <br /><br />
                    <input type="password" name="" id="" placeholder="Re-enter Password" />
                    <br /><br />
                    <input type="submit" value="Create Account" />
                </form>
                <br />
                <p>Already have an account? <Link to="/login">Login</Link></p>
                <div>-----------------OR----------------</div>
                <br />
                <button className="btn-regular"> Use Google Sign In</button>
            </div>
        </div>
    );
};

export default Register;