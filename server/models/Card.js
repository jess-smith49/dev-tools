const {Schema, model} = require('mongoose')

const cardSchema = new Schema(
    {      
        set: {
            type: String,
            required: true
        },
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

const Card = model('Card', cardSchema);
module.exports = Card;