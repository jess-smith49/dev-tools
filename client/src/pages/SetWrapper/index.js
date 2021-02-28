import { React, useState } from 'react';
import { CardGroup, Card, Modal, Button, CardDeck , Form} from 'react-bootstrap';
import FlashCard from '../../components/FlashCard';
import Header from '../../components/Header';
import {ADD_CARD} from '../../utils/mutations';
//import {QUERY_ME} from '../../utils/queries';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { useParams } from 'react-router-dom';
import { QUERY_SET } from '../../utils/queries';



export default  function CardSet (){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // const {id: setId} = useParams();

    // const {loading, data} = useQuery(QUERY_SET, {
    //     variables: {id: setId}
    // })

    // const set = data?.set || {};

    // //query stuff
    // let userCards = [];
    // const {data} = useQuery(QUERY_ME);
    // console.log(data);
    // if(data){
    //     userCards = data.me.cards;
    // }
    // console.log(userCards);

    //mutations
    const[formState, setFormState] = useState({question: '', answer: ''});
    const [addCard, {error}] = useMutation(ADD_CARD);

    const handleChange = e => {
        const {name, value} = e.target;

        setFormState({
            ...formState,
            [name]: value
        })
        //console.log(cardName);
       // cardText(e.target.value)
    }

    const handleFormSubmit = async event => {
        event.preventDefault();
        
        try{
            await addCard({
                variables: {...formState}
            });

            setFormState('')
        }
        catch(e) {
            console.log(error)
        }

        handleClose();
    }


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
                    <Modal.Body>
                        <Form >
                        <h3>Question:</h3>
                        <textarea
                            name= 'question'
                            value={formState.question}
                            onChange={handleChange}
                        ></textarea>
                        <h3>Answer:</h3>
                        <textarea
                            name='answer'
                            value={formState.answer}
                            onChange={handleChange}
                        ></textarea>
                    </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                          </Button>
                        <Button variant="primary" onClick={handleFormSubmit}>
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

