import React, { useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_SETSEED } from '../../utils/queries';

function SeededSets() {
    const { loading, data } = useQuery(QUERY_SETSEED);
    const setData = data?.set || {};
    console.log(setData);
    
    useEffect(() => {

    })
    
    return (
        <section>
            {setData.map((setDetail) => {
                return (
                    <section key={setDetail._id}>
                        <div>
                            <h2>{setDetail.setName}</h2>
                            {/* map cards here? */}
                        </div>
                    </section>
                )
            })}
        </section>
    )
};


export default SeededSets;
 
// will render the list of sets available