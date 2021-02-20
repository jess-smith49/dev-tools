// linking database
const db = require('./connection');
// linking user models
const { User, Card, Sets } = require('../models');

// once established
db.once('open', async () => {
  // deleted current sets
  await Sets.deleteMany();

    //add seed sets
  const Sets = await Sets.insertMany([
    { setName: 'Html' },
    { setName: 'JavaScript' },
    { setName: 'React' },
  ]);

  console.log('sets seeded');

  // delete current cards
  await Card.deleteMany();

  // add seeded cards
  const card = await Card.insertMany([
    {
        question: 'What is HTML?',
        answer: 'HTML is short for HyperText Markup Language and is the language of the World Wide Web.'
    },
    {
        question: 'What is JavaScript?',
        answer: 'JavaScript is a client-side as well as server side scripting language that can be inserted into HTML pages and is understood by web browsers.'
    },
    {
        question: 'Which company developed JavaScript?',
        answer: 'Netscape is the software company who developed JavaScript.'
    },
    {
        question: 'What is React?',
        answer: 'React. js is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications.'
    },
    {
        question: 'Who developed React?',
        answer: 'Jordan Walke, a software engineer at Facebook.'
    },
 
  ]);

  console.log('cards seeded');

  // deleted current users.
  await User.deleteMany();

  // add seed users
  await User.create({
    username: 'Pam',
    email: 'pamela@testmail.com',
    password: 'password12345',
  });

  await User.create({
    username: 'Jerry',
    email: 'jerry@testmail.com',
    password: 'password6789',
  });

  console.log('users seeded');

  process.exit();
});
