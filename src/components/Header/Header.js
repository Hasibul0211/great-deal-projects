import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <div>
            <div className="header">
                <h2>Great Deals</h2>
            </div>
            <div className="header-link">
                <nav className="navbar navbar-expand-md navbar-light bg-info">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarText">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link to="/home">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/about">About</Link>
                                </li>

                            </ul>

                            <span className="navbar-text">
                                <Link to="/login">Login</Link>
                            </span>
                        </div>
                    </div>
                </nav>
            </div>

        </div>
    );
};

export default Header;