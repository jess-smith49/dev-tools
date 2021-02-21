import React from 'react';
import {Link} from 'react-router-dom';

export default function CTA() {
    return (
        <section className="cta">
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
    )
};