import React from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import { useMutation, useQuery } from '@apollo/react-hooks';
import {QUERY_ME} from '../../utils/queries';
import { useParams } from 'react-router-dom';
import {QUERY_SET} from '../../utils/queries';


//export default function FlashCard() {
    const Flashcard = props => {

    // const {id: setId} = useParams();

    // const {loading, data} = useQuery(QUERY_ME, {
    //     variables: {id: setId}
    // })

    // const set = data?.set || {};

    // if (loading) {
    //     return <div>Loading...</div>;
    //   }
    //  // ///query stuff
    let userCards = [];
    const {data} = useQuery(QUERY_SET);
    console.log(data);
    if(data){
        userCards = data.sets.cards;
        console.log(data);
    }
    console.log(userCards);

    
//grab a set //map over cards to grab question and answer
    return (

        <div>
            {userCards.cards.map(sets => {
                return (
                    
                <Card>
                <Card.Body>
                <div className="question">
                 {sets.question}
                 </div>
                 <div>
                 {sets.answer}
                 </div>
                 <FontAwesomeIcon icon={faAngleDoubleRight} className="fa-3x"/>
                 </Card.Body> 
                </Card>
                )
                
               
                
            })}
            
            
        </div>

     );
    // return(
    //     <div>
    //         <h1>Test</h1>
    //     </div>
    // )
};

export default Flashcard;