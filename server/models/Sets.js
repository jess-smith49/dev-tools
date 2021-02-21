const {Schema, model} = require('mongoose')
const cardSchema = require('./Card');

const setsSchema = new Schema(
    {
        setName: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },

        cards: [cardSchema.schema]
    }
)

const Sets = model('Sets', setsSchema);
module.exports = Sets;