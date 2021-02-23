const { Schema, model } = require('mongoose')
const Card = require('./Card');

// const childSchema = new Schema({
//     name: String
//   });
  
//   const parentSchema = new Schema({
//     // Single subdocument
//     child: childSchema,
  
//     // Array of subdocuments
//     children: [ childSchema ]
//   });

const setsSchema = new Schema(
    {
        setName: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },  
        
        cards: [Card.schema]
    }
)

const Sets = model('Sets', setsSchema);
module.exports = Sets;