// linking mongoose and extending model 
const mongoose = require('mongoose');
const { Schema } = mongoose;
// linking middle ware
const bcrypt = require('bcrypt');

const userSchema = new Schema(
    {
        username: {
            type: String,
            require: true,
            unique: true,
            trim: true
        },

        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must match an email address!']
        },

        password: {
            type: String,
            required: true
        },

        sets: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Sets'
            }
        ]
    }
);
// updating and rehashing updated password.
userSchema.pre('save', async function(next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
  });
  // verifying password is accetable. 
userSchema.methods.isCorrectPassword = async function(password) {
    return bcrypt.compare(password, this.password);
  };

// declaring card as model 
const User = mongoose.model('User', userSchema);
// exporting to make visable to entire app
module.exports = User;