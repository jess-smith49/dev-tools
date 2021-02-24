import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { ADD_CARD } from '../../utils/mutations';
import  { QUERY_CARD } from '../../utils/queries';


function Card() {
    // const [cardData, setCardData] = useState({
    //     question: '',
    //     answer: ''
    // });

    // const { loading, data } = useQuery(QUERY_CARD);
    // const cardInfo = data?.cards;
    // console.log(cardInfo);

    // need to be able to create and add questions/answers to card
    // const [addCard, { error }] = useMutation(ADD_CARD);

    // const handleChange = event => {
    //     console.log(event.target)
    // }

    // const handleFormSubmit = async event => {
    //     event.preventDefault();

    // }

    // set function to populate card info with user input

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