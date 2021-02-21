import React from 'react';
import { Card, Button } from 'react-bootstrap';


export default function createSet() {
    const [addSet, setAddSet] = useState([]);

    const [questionInput, setQuestionInput] = useState('');

    const [saveSet, { error }] = useMutation(ADD_SET);


    const handleFormSubmit = async (event) => {
        evemt.prevemtDefault();

        if (!questionInput) {
            return error = "Please enter an Answer";
        }
    }
}