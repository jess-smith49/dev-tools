const { Card } = require('../models');

const cardData = [
{
    question: 'What is HTML?',
    answer: 'HTML is short for HyperText Markup Language and is the language of the World Wide Web.'
},

{
    question: 'What are tags?',
    answer: 'Content is placed in between HTML tags in order to properly format it.'
},

{
    question: 'What is JavaScript?',
    answer: 'JavaScript is a client-side as well as server side scripting language that can be inserted into HTML pages and is understood by web browsers.'
},

{
    question: 'Which company developed JavaScript?',
    answer: 'Netscape is the software company who developed JavaScript.'
},

{
    question: 'What is React?',
    answer: 'React. js is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications.'
},

{
    question: 'Who developed React?',
    answer: 'Jordan Walke, a software engineer at Facebook.'
},

],

const seedCards = () => Card.bulkCreate(cardData);

module.exports = seedCards;
