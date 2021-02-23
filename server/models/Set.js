const {Schema, model} = require('mongoose')

const setSchema = new Schema(
    {
        setName: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },        
    }
)

const Set = model('Set', setSchema);
module.exports = Set;