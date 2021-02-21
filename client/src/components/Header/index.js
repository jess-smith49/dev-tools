import React from 'react';
import Auth from '../../utils/auth';
import { Link } from 'react-router-dom';

export default function Header() {
    function showNavigation() {
        if (Auth.loggedIn()) {
            return (
                <ul>
                    <li>
                        <a href='/' onClick={() => Auth.logout()}>
                            Logout
                        </a>
                    </li>
                </ul>
            ) 
        } else {
            return (
                <ul className="cta">
                    <li className="cta-btn">
                        <Link to="/signup">
                            Signup
                        </Link>
                    </li>
                    <li className="cta-btn" >
                        <Link to="/login">
                            Login
                        </Link>
                    </li>
                </ul>
            )
        }
    }
    return(
        <header className="header-container">
            <div className="flex-wrap">
                <h1 className="h-lg">Dev Learn</h1>
            </div>
            <nav>
                {showNavigation()}
            </nav>
        </header>
    )
};