import { React }  from 'react';
import { CardGroup } from 'react-bootstrap';
import FlashCard from '../../components/FlashCard';

export default function CardSet() {
    return (
            //eventually map through all cards in a setInterval;
            //create a container to map - what is best way visually to flip through cards
            //how do we add a randomizer so that they get shuffled
        <div className="flashcards">
            <CardGroup>
                <FlashCard />
            </CardGroup>
        </div>
    )
}