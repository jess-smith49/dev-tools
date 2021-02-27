import React, { useState, useEffect } from 'react'
import {Link, Router} from 'react-router-dom';
import Header from '../../components/Header';
import { Card, Button, Modal, CardDeck, Form } from 'react-bootstrap';
import { ADD_SET } from '../../utils/mutations'
import { QUERY_ME } from '../../utils/queries';
import { useQuery, useMutation } from '@apollo/react-hooks';
//import store provifer
import { useStoreContext } from '../../utils/GlobalState';

export default function Dashboard() {
    const [ state, dispatch ] = useStoreContext();
    const { sets } = state;
    const { data: setData } = useQuery(QUERY_ME);

    const [show, setShow] = useState(false);


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        if ( setData ) {
            dispatch({
                type: QUERY_ME,
                sets: setData.sets
            })
        }
    }, [setData, dispatch]);

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
                   <Modal.Title>Modal heading</Modal.Title>
                 </Modal.Header>
                 <Modal.Body>
                   <Form onSubmit={handleFormSubmit}>
                       <h3>Name:</h3>
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