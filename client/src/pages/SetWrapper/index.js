// linking react, react middle ware and bootstrap templets. 
import { React, useState } from 'react';
import { CardGroup, Card, Modal, Button, CardDeck } from 'react-bootstrap';
import FlashCard from '../../components/FlashCard';
import Header from '../../components/Header';


// declaring initial state and card sets. 
export default function CardSet() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // returning jsk. 
    return (
        <section className="set-wrap">
            <Header />
            <div className="set-body">
                <h1>HTML</h1>
                <div className="set-modal"></div>
                <Button variant="primary" onClick={handleShow}>
                    Add A Card To Your Set
                </Button>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                          </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                      </Button>
                    </Modal.Footer>
                </Modal>
            <div className="card-wrap">
                <CardGroup>
                    <FlashCard />
                </CardGroup>
            </div>
            </div>
        </section >
    )
}