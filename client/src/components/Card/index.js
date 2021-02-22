import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { ADD_CARD } from '../../utils/mutations';
import  { QUERY_ME } from '../../utils/queries';


function Card() {
    const [cardData, setCardData] = useState({
        question: '',
        answer: ''
    });
    
    // need to be able to create and add questions/answers to card
    const [addCard, { error }] = useMutation(ADD_CARD);

    const handleChange = event => {
        console.log(event.target)
    }

    const handleFormSubmit = async event => {
        event.preventDefault();
        try {
            // add Card to database
            await addCard({
                variables: { question, answer }
            });
            setCardData({
                question: '',
                answer: ''
            });
            
            console.log(variables);
        } catch (e) {
            console.error(e);
        }
    }

    // set function to populate card info with user input

    return (
        <section>
            <form onSubmit={handleFormSubmit}>
            <textarea
                placeholder="enter question"
                onChange={handleChange}></textarea>

            </form>
        </section>
    )
}

export default Card;