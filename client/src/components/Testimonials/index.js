// linking react middleware, and bootstrap. 
import React from 'react';
import { Card,  CardGroup, } from 'react-bootstrap';


// Declaring and return testimonies array. 
export default function Testimonials () {
   

    const tests = [
      {
        text: "I've learned things"
      },
      {
        text: "Definitley learned things"
      },
      {
        text: "Super teach"
      },
      {
        text: "Fancy learn time"
      },

    ]
    // returning jsk
    return (
       <CardGroup>
         {tests.map((test, i) => (
        <Card key={i}>
         <div>
           {test.text}
         </div>
        </Card>
         ))}
       </CardGroup>
    )
};

