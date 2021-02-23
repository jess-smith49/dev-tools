import React, { useState } from 'react'
import Header from '../../components/Header';
import { Card, Button, Modal } from 'react-bootstrap';
import CreateSet from '../../components/AddSet';


export default function Dashboard() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <section className="dash-">
            <Header />
            <Card style={{ width: '20rem' }}>
                <Card.Body>
                <Button variant="primary" onClick={handleShow}>
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
        </section>
    )
};