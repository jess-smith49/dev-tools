// linking mongoose
const mongoose = require('mongoose');

// creating connection to mongo db
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/dev-tools',
  {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

// making visable to entire app 
module.exports = mongoose.connection;