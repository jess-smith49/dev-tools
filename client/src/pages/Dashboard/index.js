import React, { useState } from 'react'
import {Link, Router} from 'react-router-dom';
import Header from '../../components/Header';
import { Card, Button, Modal, CardDeck, Form } from 'react-bootstrap';
import CreateSet from '../../components/AddSet';
import {ADD_SET} from '../../utils/mutations';
import {QUERY_ME} from '../../utils/queries';
import { useMutation, useQuery } from '@apollo/react-hooks';
import Set from '../../components/Set';



export default function Dashboard() {
    const [show, setShow] = useState(false);


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // render seeded cards

        let userSets = [];
    //query stuff
        const {data} = useQuery(QUERY_ME);
        console.log(data);
        if(data){
            userSets = data.me.sets;
        };
        console.log(userSets);

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
           //function to close
           handleClose();
   
       }

    return (
        <div>
            <Header />
        <section className="dash">
            <CardDeck className="dash-wrap">
            <Set />
            {userSets.map(set => {
                return (
                    <Card md={2} key={set._id}>
                <Card.Body>
                    {/* in the router add id after /flashcards/(idparamter) */}
                    <Link to={`/flashcards/${set._id}`}>{set.setName}</Link>
                    {/* <Link to='/flashcards'>{set.setName}</Link> */}
                </Card.Body>
            </Card>
                )})}
            
            <Card className="create">
            <Card.Body>
                <Button variant="primary" onClick={handleShow}>
                    Create your own set
                </Button>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                   <Modal.Title>Modal heading</Modal.Title>
                 </Modal.Header>
               <Modal.Body>
                   <Form >
                       <h1>Name:</h1>
                       <textarea
                        
                        name="set"
                        value={setName}
                        onChange={handleChange}
                       >
                       </textarea>
                       <button type="submit"></button>
                   </Form>
                   </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                          </Button>
                        <Button type="submit" variant="primary" onClick={handleFormSubmit}>
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