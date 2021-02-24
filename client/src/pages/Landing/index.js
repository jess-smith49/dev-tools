import React from 'react';
import { Link } from 'react-router-dom';
import Testimonials from '../../components/Testimonials';
import Header from '../../components/Header';


export default function CTA() {
    return (
        <section className="landing-container">
            <Header />
            <div className="cta">
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
                <div className="testimonials">
                    <Testimonials />
                </div>
            </section>

    )
};