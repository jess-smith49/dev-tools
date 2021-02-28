import React from 'react';
import { Link } from 'react-router-dom';
import Testimonials from '../../components/Testimonials';
import Header from '../../components/Header';
import Photo from '../../assets/images/5.png'
import { Col, Row, Container } from 'react-bootstrap'


export default function CTA() {
    return (
        <section className="landing-container">
            <Header />
            <Container fluid className="cta">
                <Row className="cta-wrapper">
                    <Col>
                        <div className="cta-text-wrapper">
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
                    </Col>
                    <Col>
                        <div className="img">
                            <img src={Photo}></img>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

    )
};