import React, {useState, formState} from 'react';
import { Card, Button, Modal, ModalBody, Form } from 'react-bootstrap';
import Auth from '../../utils/auth';
import { useMutation } from '@apollo/react-hooks';
import {ADD_SET} from '../../utils/mutations';

export default function CreateSet() {
    //modal open and close
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
   
    //add set 
    // const [addSet, setAddSet] = useState([]);

    // const [questionInput, setQuestionInput] = useState('');

    // const [saveSet, { error }] = useMutation(ADD_SET);

    //form state
    const [formState, setFormState] = useState({ set: ''})
    const [addSet, {error}] = useMutation(ADD_SET);

    const handleChange = e => {
        const {name, value} = e.target;

        setFormState({
            ...formState,
            [name]: value
        });
    };


    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            console.log(formState);
            const { data } = await addSet({
                variables: { ...formState }
            });
            console.log(data);
            Auth.addSet(data.addSet.token);

        } catch (err) {
            console.error(err);
        }

        setFormState({
            set: '',
            
        });
    };

        return (
            <>
                 <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add a Set</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h2>Give Your Set a Unique Name</h2>
                        <Form onSubmit={handleFormSubmit}>
                            <input
                                placeholder="What is the Name of the Set?"
                                name="set"
                                type="text"
                                value={formState.set}
                                onChange={handleChange}
                            />
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
            </>
        )
    }

