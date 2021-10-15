import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
    return (
        <div className="register-form">
            <div>
                <h2 className="register-title">Register here</h2>
                <form>
                    <label htmlFor="name">Name </label><br />
                    <input className="register-input" type="text" placeholder="Enter your full name" /><br />
                    <label htmlFor="email">Email</label><br />
                    <input className="register-input" type="email" placeholder="Enter your email" /><br />
                    <label htmlFor="password">Password</label><br />
                    <input className="register-input" type="password" placeholder="Enter your password" /><br />
                    <label htmlFor="repassword">Re-enter password</label><br />
                    <input className="register-input" type="passwrod" placeholder="Re-enter your password" /><br />
                    <input className="btn btn-warning mt-2" type="submit" value="Submit" />
                </form>
                <div><p>Already registerd?<Link to="/login">Login now</Link></p></div>
                <div>
                    <h5 className="login-with">Register with-</h5>
                    <div className="login-with-icon">
                        <p><i class="fab fa-google icons" title="with google"></i></p>
                        <p><i class="fab fa-github icons" title="with github"></i></p>
                        <p><i class="fab fa-twitter icons" title="with twitter"></i></p>
                        <p><i class="fab fa-facebook icons" title="with facebook"></i></p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Register;