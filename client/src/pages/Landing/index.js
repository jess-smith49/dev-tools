import React from 'react';
import { Link } from 'react-router-dom';
import SetCarosuel from '../../components/Carosuel';

export default function CTA() {
    
  

    return (
        <section className="landing-container">
            <div className="cta">
                <div className="cta-title">
                    <h1 className="h-lg">Dev Learn</h1>
                </div>
                <div className="cta-text">
                    <p>
                        The up and coming flashcard app for aspiring web developers.
                    </p>
                </div>
                <div className="cta-buttons">
                    <div className="cta-btn">
                        <Link to="/signup">Create an Account </Link>
                    </div>
                    <div className="cta-btn">
                        <Link to="/login">Login </Link>
                    </div>
                </div>
                </div>
           
                <div className="carosuel">
                    <SetCarosuel />
                </div>
            </section>

    )
};