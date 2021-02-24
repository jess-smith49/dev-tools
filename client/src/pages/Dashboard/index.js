import React, { useState } from 'react'
import {Link, Router} from 'react-router-dom';
import Header from '../../components/Header';
import { Card, Button, Modal, CardDeck, Form } from 'react-bootstrap';
import CreateSet from '../../components/AddSet';
import {ADD_SET} from '../../utils/mutations';
import { useMutation, useQuery } from '@apollo/react-hooks';
//import {QUERY_SET} from '../../utils/queries';


export default function Dashboard() {
   
   //modal stuff
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // //query stuff
    // const {data} = useQuery(QUERY_SET);
    // if(data){
    //     userSets = data.userSets;
    // };

    
    //mutation stuff
    const [setName, setText] = useState('');
    const [addSet, {error}] = useMutation(ADD_SET);

    const handleChange = e => {
        const {name, value} = e.target;
        console.log(setName);
        setText(e.target.value)
    
};
    const handleFormSubmit = async event => {
        event.preventDefault();
        console.log(setName)
        try{
             await addSet({
                variables: {setName}
            });
            console.log(setName)
            
            setText('')
        }
        catch(e) {
            console.log(error)
        }

    }

    //map over sets here
    
    return (
        <section className="dash-">
            <Header />

            <CardDeck>
            <Card style={{ width: '15rem' }}>
                <Card.Body>
                    <Link to='/flashcards'>Enter Your Set Name Here</Link>
                </Card.Body>
            </Card>
            <Card style={{ width: '15rem' }}>
            <Card.Body>
                <Button variant="primary" onClick={handleShow}>
                    Create your own set
                </Button>
               
                <Modal show={show} onHide={handleClose}>
               <Modal.Header closeButton>
                   <Modal.Title>Enter a Name for Your Set</Modal.Title>
               </Modal.Header>
               <Modal.Body>
                   <Form onSubmit={handleFormSubmit}>
                       <h1>Name:</h1>
                       <textarea
                        
                        name="set"
                        value={setName}
                        onChange={handleChange}
                       >
                       </textarea>
                   </Form>
               </Modal.Body>
           
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                          </Button>
                        <Button type="submit" variant="primary" onClick={handleClose}>
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