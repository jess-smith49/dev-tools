import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useParams } from 'react-router-dom';
import { QUERY_SET } from '../../utils/queries';

// function to render all cards in a set
function SingleSet(props) {
    const { id: setId } = useParams();
    const { loading, data } = useQuery(QUERY_SET, {
        variables: { id: setId }
    });

    const cards = data?.cards || {};
    console.log(cards);
 
    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <section>
            {cards.map(card => {
                return (
                    <div key={card._id}>
                        <p className="front">{card.question}</p>
                        <p className="back">{card.answer}</p>
                    </div>
                )
            })}
        </section>
    )

}

export default SingleSet;