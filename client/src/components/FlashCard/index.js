import React from 'react';
import {Card, CardBody } from 'react-bootstrap';

export default function FlashCard() {
    return (
        <Card>
            <div className="question">
                <p>How do you like them apples</p>
            </div>
            <div className="answer">
                <p>Not at all</p>
            </div>
        </Card>
    );
};