// linking react middleware, user auth, and mutation files. 
import React, { useEffect, useState } from 'react';
import { QUERY_ME, QUERY_SEED_SET } from '../../utils/queries';
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
    //console.log(userData);

    // query seeded sets
    const {loading:setLoading, data: setSeeds } = useQuery(QUERY_SEED_SET);
    console.log(setSeeds);

    if (loading || setLoading) {
        return <div>Loading...</div>;
      }

    // add a click handle to bring to cards
    return (
        <section>
            <div className="seededSets">
                <h1> Test out these decks! </h1>
                <div>
                    {setSeeds.seededSets.map(seeds => {
                        return (
                            <div key={seeds._id}>
                                <h1>{seeds.setName}</h1>
                            </div>
                        )
                    })}
                    
                </div>
            </div>
            {userData.sets? (userData.sets?.map(set => {
                return (
                    <div key={set._id}>
                        <h1>{set.setName}</h1>
                    </div>
                )
            })) : (
                <p> You have not created a set yet</p>
            )}
        </section>
    )
}

export default Set;
