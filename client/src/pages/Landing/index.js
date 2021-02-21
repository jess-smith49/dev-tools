import React from 'react';
import { Link } from 'react-router-dom';

export default function CTA() {
    return (
        <div className="apply-grad">
            <section className="cta">
                <div className="cta-title">
                    <h1 className="h-lg">Dev Learn</h1>
                </div>
                <div className="cta-text">
                    The ulitmate resource for learning web developmemt at your own pace. Create your account to start learning today!
        </div>
                <div className="cta-buttons">
                    <div className="cta-btn">
                        <Link to="/signup">Create an Account </Link>
                    </div>
                    <div className="cta-btn">
                        <Link to="/login">Login </Link>
                    </div>
                </div>

            </section>
        </div>
    )
};