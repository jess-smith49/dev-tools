import React from 'react';
import { Card, Button, Modal, CardGroup, CardImg } from 'react-bootstrap';



export default function Testimonials () {
   

    const images= [
        "https://images.unsplash.com/photo-1579412690850-bd41cd0af397?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80",
        "https://images.unsplash.com/photo-1600695268275-1a6468700bd5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",
        "https://images.unsplash.com/photo-1544207763-2872e5eb9b78?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        "https://images.unsplash.com/photo-1593720217529-01f0a5d09aed?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1008&q=80",
        "https://images.unsplash.com/photo-1579403124614-197f69d8187b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
    ]

    return (
       <CardGroup>
         {images.map((images, i) => (
        <Card>
          <CardImg src = {images[i]} />
        </Card>
         ))}
       </CardGroup>
    )
};

