import React from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import { useMutation, useQuery } from '@apollo/react-hooks';
import { QUERY_ME } from '../../utils/queries';
import { useParams } from 'react-router-dom';
import { QUERY_SET } from '../../utils/queries';


//export default function FlashCard() {
const Flashcard = props => {

    const {id: setId} = useParams();

    // const {loading, data} = useQuery(QUERY_ME, {
    //     variables: {id: setId}
    // })

    // const set = data?.set || {};

    // if (loading) {
    //     return <div>Loading...</div>;
    //   }
    //  // ///query stuff
    let userCards = [];
    const { data } = useQuery(QUERY_ME);
    console.log(data);
    if (data) {
        userCards = data.me.sets;
        console.log(data);
    }
    console.log(userCards);

    //
    //grab a set //map over cards to grab question and answer
    return (

        <div>
            {userCards.map(cardObj => cardObj.cards.map(card => {

            return (
                            
                        <Card key={setId}>
                        <Card.Body>
                        <div className="question">
                        {card.question}
                        </div>
                        <div>
                        {card.answer}
                        </div>
                        <FontAwesomeIcon icon={faAngleDoubleRight} className="fa-3x"/>
                        </Card.Body> 
                        </Card>
                        )

            }))}
        
        
    </div>
    
    
    );
}

export default Flashcard;