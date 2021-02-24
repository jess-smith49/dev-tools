import React from 'react';
import Auth from '../../utils/auth';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';

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
                            Signup
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
        <Container fluid>
           <Navbar expand="lg">
               <h1>Dev Tools</h1>
               <Nav>
                   <div className="nav-wrapper">
                   {showNavigation()}
                   </div>
               </Nav>
           </Navbar>
           </Container>
        </header>
    )
};

{/* <div className="flex-wrap">
<h1 className="h-lg">Dev Learn</h1>
<nav>
{showNavigation()}
</nav>
</div> */}