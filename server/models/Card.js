// linking mongoose and extending model 
const {Schema, model} = require('mongoose')

// Declaring model to normalize incoming data. 
const cardSchema = new Schema (
    {
        question: {
            type: String,
            required: true
        },

        answer: {
            type: String,
            required: true
        },

    }
);
// declaring card as model 
const Card = model('Card', cardSchema);
// exporting to make visable to entire app
module.exports = Card;