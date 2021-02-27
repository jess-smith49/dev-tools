import React, { useState } from 'react'
import {Link, Router} from 'react-router-dom';
import Header from '../../components/Header';
import { Card, Button, Modal, CardDeck, Form } from 'react-bootstrap';
import CreateSet from '../../components/AddSet';
import {ADD_SET} from '../../utils/mutations';
import { useMutation, useQuery } from '@apollo/react-hooks';



export default function Dashboard() {
    const [show, setShow] = useState(false);


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // render seeded cards

//     //query stuff
//     const {data} = useQuery(QUERY_SET);
//     if(data){
//         userSets = data.userSets;
//     };

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
    return (
        <div>
            <Header />
        <section className="dash">

            <CardDeck className="dash-wrap">
                {/* mapping over cards */}
            <Card md={2}>
                <Card.Body>
                    <Link to='/flashcards'>Set Name Here</Link>
                </Card.Body>
            </Card>
            <Card className="create">
            <Card.Body>
                <Button variant="primary" onClick={handleShow}>
                    Create your own set
                </Button>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                   <Modal.Title>Enter in a Name for your Set</Modal.Title>
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
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                      </Button>
                    </Modal.Footer>
                </Modal>
                </Card.Body>
            </Card>
           
               
            </CardDeck>
        </section>
        </div>
    )
};