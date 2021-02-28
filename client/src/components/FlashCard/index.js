import React from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'

export default function FlashCard() {



    return (

        <div>
            <Card>
                <Card.Body>
                <div className="question">
                Add an onlick event to flip over card. Card inversed colors when flipped. 
                 </div>
                 <FontAwesomeIcon icon={faAngleDoubleRight} className="fa-3x"/>
                 </Card.Body> 
            </Card>
            <Card>
                <Card.Body>
                <div className="question">
                    This is a question
                 </div>
                 <FontAwesomeIcon icon={faAngleDoubleRight} className="fa-3x"/>
                 </Card.Body> 
            </Card>
            <Card>
                <Card.Body>
                <div className="question">
                    This is a question
                 </div>
                 <FontAwesomeIcon icon={faAngleDoubleRight} className="fa-3x"/>
                 </Card.Body> 
            </Card>
            <Card>
                <Card.Body>
                <div className="question">
                    Add an onlick event to flip over card. Card inversed colors when flipped. 
                 </div>
                 <FontAwesomeIcon icon={faAngleDoubleRight} className="fa-3x"/>
                 </Card.Body> 
            </Card>
        </div>

    );
};