import React from 'react';
import { Link } from 'react-router-dom';
import Carosuel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function CTA() {
    //create breakpoints for carosuel
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return (
        <div className="apply-grad">
            <section className="cta">
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
                <section className="carosuel">
                    <div className="carosuel-container">
                        <Carosuel responsive={responsive}>
                            <div>Item 1</div>
                            <div>Item 2</div>
                            <div>Item 3</div>
                            <div>Item 4</div>
                        </Carosuel>
                    </div>
                </section>

            </section>
        </div>
    )
};