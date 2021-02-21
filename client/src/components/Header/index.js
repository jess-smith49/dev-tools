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
                <ul>
                    <li>
                        <Link to="/signup">
                        <div className="dash-cards card-deck">
                <div className="card">
                    <div className="card-body">
                        Sets Goes Here
                    </div>
                </div>
            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/login">
                            Login
                        </Link>
                    </li>
                </ul>
            )
        }
    }
    return(
        <header>
            <div className="flex-wrap">
                <h1 className="h-lg">Dev Learn</h1>
            <nav>
                {showNavigation()}
            </nav>
            </div>
        </header>
    )
};