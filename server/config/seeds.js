const db = require('./connection');
const { User, Card, Sets } = require('../models');

db.once('open', async () => {
  await Sets.deleteMany();

  const Sets = await Sets.insertMany([
    { setName: 'Html' },
    { setName: 'JavaScript' },
    { setName: 'React' },
  ]);

  console.log('sets seeded');

  await Card.deleteMany();

  const card = await Card.insertMany([
    {
        question: '',
        answer: ''
    },
    {
        question: '',
        answer: ''
    },
    {
        question: '',
        answer: ''
    },
    {
        question: '',
        answer: ''
    },
    {
        question: '',
        answer: ''
    },
    {
        question: '',
        answer: ''
    },
    {
        question: '',
        answer: ''
    },
    {
        question: '',
        answer: ''
    },
    {
        question: '',
        answer: ''
    },
    {
        question: '',
        answer: ''
    },
    {
        question: '',
        answer: ''
    },
    {
        question: '',
        answer: ''
    }
  ]);

  console.log('cards seeded');

  await User.deleteMany();

  await User.create({
    username: 'Pamm',
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
