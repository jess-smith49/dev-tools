import { useQuery } from '@apollo/react-hooks';
import { React, useState } from 'react';
import { CardGroup, Card, Modal, Button, CardDeck } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import FlashCard from '../../components/FlashCard';
import Header from '../../components/Header';
import {QUERY_SET} from '../../utils/queries';



export default function CardSet() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const {id: setId} = useParams();
    const {loading, data} = useQuery(QUERY_SET, {
        variables: {id: setId}
    })

    const set = data?.set || {};

    return (
        <section className="set-wrap">
            <Header />
            <div className="set-body">
                <h1>{set.setName}</h1>
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