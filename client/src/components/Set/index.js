import React from 'react';
import { QUERY_ME } from '../../utils/queries';
import { useQuery } from '@apollo/react-hooks';

function Set() {
    // functionality to create a card and add cards to set
    // console.log
    // if (!sets.length) {
    //     return <h3>You do not have any sets yet!</h3>
    // }

    // query user data
    const { loading , data } = useQuery(QUERY_ME);
    const userData = data?.me || {};
    console.log(userData);


    // display all sets owned by user
    return (
        <section>
            {userData.sets?.map(set => {
                return (
                    <div key={set._id}>
                        <h1>{set.setName}</h1>
                    </div>
                )
            })}
        </section>
    )
}

export default Set;
