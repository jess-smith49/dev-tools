// linking react, react middle ware, bootstrap templets, mutations, apollo middle ware and queries. 
import React, { useState } from 'react'
import {Link, Router} from 'react-router-dom';
import Header from '../../components/Header';
import { Card, Button, Modal, CardDeck, Form } from 'react-bootstrap';
import CreateSet from '../../components/AddSet';
import {ADD_SET} from '../../utils/mutations';
import {QUERY_ME} from '../../utils/queries';
import { useMutation, useQuery } from '@apollo/react-hooks';


// Initial state. 
export default function Dashboard() {
    const [show, setShow] = useState(false);


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // render seeded cards

        let userSets = [];
    //query data
        const {data} = useQuery(QUERY_ME);
        console.log(data);
        if(data){
            userSets = data.me.sets;
        };
        console.log(userSets);

       //mutation declaired
       const [setName, setText] = useState('');
       const [addSet, {error}] = useMutation(ADD_SET);
        // setting data on change. 
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
               // removing user input from form after event. 
               setText('')
           }
           catch(e) {
               console.log(error)
           }
           //function to close
           handleClose();
   
       }
       // returning jsk
    return (
        <div>
            <Header />
        <section className="dash">

            <CardDeck className="dash-wrap">
            {userSets.map(set => {
                return (
                    <Card md={2}>
                <Card.Body>
                    {/* in the router add id after /flashcards/(idparamter) */}
                    <Link to='/flashcards'>{set.setName}</Link>
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