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
    const {data} = useQuery(QUERY_ME);
    console.log(data);
    if(data){
        userCards = data.me.sets;
        console.log(data);
    }
    console.log(userCards);

    
//grab a set //map over cards to grab question and answer
    return (

        <div>
            {userCards.map(sets => {
                return (
                    
                <Card key={card._id}>
                <Card.Body>
                <div className="question">
                 {sets.cards}
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

        // <div>Hello</div>

     );
    // return(
    //     <div>
    //         <h1>Test</h1>
    //     </div>
    // )
};

export default Flashcard;