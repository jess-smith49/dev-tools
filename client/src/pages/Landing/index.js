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
                    <p>
                        One of the biggest hurdles when learning web development is memorizing the vast amount of definitions
                        and terms that is being thrown at you. The Dev Learn team wanted to create a simple,
                        easy-to-use application that would tackle two of the major components of learning code:
                         <span>
                          <br /> 1. Consistency.
                          <br /> 2. Memorization.
                        </span>
                    </p>
                    <p>
                        We came up with our favorite questions from our experience and created 3 sets of flashcards that
                        you will automatically have access to when you create an account. You will also receive daily reminders
                        so you never miss out on a day of studying.
                        <br />
                        <span>
                        So what are you waiting for? Get learning!
                        </span>
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

            </section>
        </div>
    )
};