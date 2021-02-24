import React, {useState, formState} from 'react';
import { Card, Button, Modal, ModalBody } from 'react-bootstrap';
import Auth from '../../utils/auth';
import { useMutation } from '@apollo/react-hooks';
import {ADD_SET} from '../../utils/mutations';

export default function CreateSet() {
    //modal open and close
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
   
    //add set 
    const [addSet, setAddSet] = useState([]);

    const [questionInput, setQuestionInput] = useState('');

    const [saveSet, { error }] = useMutation(ADD_SET);

    //form state
    const [formState, setFormState] = useState({ set: '', question: '', answer: ''})


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
            question: '',
            answer: ''
        });
    };

        return (
            <>
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
            </>
        )
    }