import React, { useState } from 'react'
import {Link, Router} from 'react-router-dom';
import Header from '../../components/Header';
import { Card, Button, Modal, CardDeck } from 'react-bootstrap';
import CreateSet from '../../components/AddSet';


export default function Dashboard() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <section className="dash-">
            <Header />

            <CardDeck>
            <Card style={{ width: '15rem' }}>
                <Card.Body>
                    <Link to='/cardset'>Set Name Here</Link>
                </Card.Body>
            </Card>
            <Card style={{ width: '15rem' }}>
                <Card.Body>
                <Button variant="primary" onClick={handleShow}>
                    Create your own set
                </Button>
                <Modal show={show} onHide={handleClose}>
                    <CreateSet />
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                          </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                      </Button>
                    </Modal.Footer>
                </Modal>
                </Card.Body>
            </Card>
            </CardDeck>
        </section>
    )
};