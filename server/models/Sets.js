const {Schema, model} = require('mongoose')
const cardSchema = require('./Card');

const SetsSchema = (
    {
        setName: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },

        cards: [cardSchema]
    }
)

const Sets = model('Sets', SetsSchema);
module.exports = Sets;