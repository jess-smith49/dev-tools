const { Card } = require('../models');

const cardData = [
{
    question: '',
    answer: ''
},

{
    question: '',
    answer: ''
},

{
    question: '',
    answer: ''
},

{
    question: '',
    answer: ''
},

{
    question: '',
    answer: ''
},

],

const seedCards = () => Card.bulkCreate(cardData);

module.exports = seedCards;
