// linking mongoose and extending model 
const { Schema, model } = require('mongoose')

// Declaring model to normalize incoming data. 
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

// declaring card as model 
const Sets = model('Sets', setsSchema);
// exporting to make visable to entire app
module.exports = Sets;