const { Schema, model } = require('mongoose')

const setsSchema = new Schema(
    {
        setName: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        cards: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Card'
            }
        ]
    }
)

const Sets = model('Sets', setsSchema);
module.exports = Sets;