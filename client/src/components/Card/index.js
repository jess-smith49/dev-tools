import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { ADD_CARD } from '../../utils/mutations';
import { QUERY_ME } from '../../utils/queries';


function Card() {
    // set initial state of set name as blank
    const [currentSet, selectedSet] = useState();
    // once a set is clicked, set state of set name and render  cards from that set

    const { loading, data } = useQuery(QUERY_ME);
    const userData = data?.me || {};


    // need to be able to create and add questions/answers to card
    // const [addCard, { error }] = useMutation(ADD_CARD);

    // const handleChange = event => {
    //     console.log(event.target)
    // }

    // const handleFormSubmit = async event => {
    //     event.preventDefault();

    // }

    // set function to populate cards

    return (
        <section>
            {/* {cardInfo.map((cardDetail) => {
                return (
                    <div key={cardDetail._id}>
                        <h3>{cardDetail.question}</h3>
                        <p>{cardDetail.answer}</p>
                    </div>
                )
            })} */}
        </section>
    )
}

export default Card;