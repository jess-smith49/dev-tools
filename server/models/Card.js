const {Schema, model} = require('mongoose')

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
        set: {
            type: String
        }
    }
);

const Card = model('Card', cardSchema);
module.exports = Card;