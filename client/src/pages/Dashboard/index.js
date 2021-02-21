import React, { useState } from 'react'
import Header from '../../components/Header';
import { Card, Button } from 'react-bootstrap';
import { useMutation } from '@apollo/react-hooks';

import { ADD_SET } from '../../utils/mutations';

export default function Dashboard() {
   
    return (
        <section className="dash">
            <Header />
            <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </section>
    )
};