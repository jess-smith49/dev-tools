import React from 'react';
import { useParams } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import { ADD_CARD } from '../../utils/mutations';

const cardForm = () => {
const [addCard, { error }] = useMutation(ADD_CARD);
}


// function Card() {
//     const { loading, data } = useQuery(QUERY_ME);
//     console.log(data);
//     // need to be able to create and add questions/answers to card
//     // const [cards, setCards] = useState()

//     // set function to populate card info with user input

//     return (
//         <p>card element goes here</p>
//     )
// }

 export default cardForm;