import { React, useState }  from 'react';
import { CardGroup, Card, Modal, Button } from 'react-bootstrap';
import FlashCard from '../../components/FlashCard';
import CreateCard from '../../components/CreateCard'

export default function CardSet() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
 
    return (
        
        <div className="flashcards">
            <CardGroup>
                <FlashCard />
            <Card style={{ width: '15rem' }}>
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
            </Card>
            </CardGroup>
        </div>
    )
}