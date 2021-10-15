import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
const Login = () => {
    return (
        <div>
            <div className="login-form">
                <div>
                    <h2 className="login-title">Login</h2>
                    <form>
                        <input className="login-input" type="email" placeholder="Enter your email" /><br />
                        <input className="login-input" type="password" placeholder="Type password" /><br />
                        <input className="btn btn-warning fw-bold mt-2" type="submit" value="Submit" />
                    </form>
                    <div><p>Haven't register?<Link to="/register">Register now.</Link></p></div>
                    <div>
                        <h5 className="login-with">Login with-</h5>
                        <div className="login-with-icon">
                            <p><i class="fab fa-google icons" title="with google"></i></p>
                            <p><i class="fab fa-github icons" title="with github"></i></p>
                            <p><i class="fab fa-twitter icons" title="with twitter"></i></p>
                            <p><i class="fab fa-facebook icons" title="with facebook"></i></p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;