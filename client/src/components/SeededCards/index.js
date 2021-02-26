// once user clicks a setName in dashboard, they get taken to a page that displays all cards within that set

import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_SET } from '../../utils/queries'

function SeededCards({ setName }) {
    const [initialSet, setInitialSet] = useState();
    const { loading, data } = useQuery(QUERY_SET);
    const cardData = data?.cards;
    console.log(cardData)

    return (
        <section>
            {cardData.map((cardSeeds) => {
                return (
                    <div key={cardSeeds._id}>
                        <p className="front">{cardSeeds.question}</p>
                        <p className="back">{cardSeeds.answer}</p>
                    </div>
                )
            })}
        </section>
    )
}

export default SeededCards;
