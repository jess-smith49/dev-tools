// linking database
const db = require('./connection');
// linking user models
const { User, Card, Sets } = require('../models');

// once established
db.once('open', async () => {
  // deleted current sets
  await Sets.deleteMany();

    //add seed sets
  const sets = await Sets.insertMany([
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
        set: sets[0]._id,
        question: 'What is HTML?',
        answer: 'HTML is short for HyperText Markup Language and is the language of the World Wide Web.'
    },

    {
        set: sets[0]._id,
        question: 'Web ____ are mostly for viewing and reading, while web _____ are for interacting.',
        answer: '1. Pages. 2. Apps'
    },

    {
        set: sets[0]._id,
        question: 'What is the standards organization that sets HTML standards?',
        answer: '1. Pages. 2. Apps'
    },

    {
        set: sets[0]._id,
        question: 'What is "<!Doctype HTML>"',
        answer: 'This tag is used to specify which version of HTML that your document is using.'
    },

    {
        set: sets[0]._id,
        question: 'What is "<a></a>"',
        answer: 'This tag creates an anchor for a hyperlink to either another document or somewhere within 	the current document. '
    },

    {
        set: sets[0]._id,
        question: 'What tag tells the browser where the document stops and starts?',
        answer: '<html>'
    },

    {
        set: sets[0]._id,
        question: 'HTML creates structure while ___ controls the styling of a document',
        answer: 'CSS'
    },

    {
        set: sets[0]._id,
        question: 'What tag allows you to change the name that appears in the browsers tab?',
        answer: '<title></title>'
    },  

    {
        set: sets[0]._id,
        question: 'Do older HTML files work on newer browsers?',
        answer: 'Yes, older HTML files are compliant to the HTML standard.'
    },  

    {
        set: sets[0]._id,
        question: 'Does a hyperlink apply to text only?',
        answer: 'No, hyperlinks can be used in the text as well as images.'
    }, 
    
    {
        set: sets[1]._id,
        question: 'What is JavaScript?',
        answer: 'JavaScript is a client-side as well as server side scripting language that can be inserted into HTML pages and is understood by web browsers.'
    },

    {
        set: sets[1]._id,
        question: 'Which company developed JavaScript?',
        answer: 'Netscape is the software company who developed JavaScript.'
    },

    {
        set: sets[1]._id,
        question: 'Is JavaScript a case-sensitive language?',
        answer: 'Netscape is the software company who developed JavaScript.'
    },

    {
        set: sets[1]._id,
        question: 'What is the purpose of ‘This’ operator in JavaScript?',
        answer: 'The JavaScript this keyword refers to the object it belongs to.'
    },
    
    {
        set: sets[1]._id,
        question: 'What is Callback?',
        answer: 'A callback is a plain JavaScript function passed to some method as an argument or option.'
    },

    {
        set: sets[1]._id,
        question: 'What is the difference between null & undefined?',
        answer: 'Undefined means a variable has been declared but has not yet been assigned a value.'
    },

    {
        set: sets[1]._id,
        question: 'What is the difference between undeclared & undefined?',
        answer: 'Undeclared variables are those that do not exist in a program and are not declared.'
    },

    {
        set: sets[1]._id,
        question: 'What is NaN in JavaScript?',
        answer: 'NaN is a short form of Not a Number.'
    },

    {
        set: sets[1]._id,
        question: 'How can you convert the string of any base to integer in JavaScript?',
        answer: 'The parseInt() function is used to convert numbers between different bases'
    },

    {
        set: sets[1]._id,
        question: 'What is the difference between Attributes and Property?',
        answer: 'Attributes-  provide more details on an element like id, type, value etc. Property-  is the value assigned to the property like type=”text”, value=’Name’ etc.'
    },
      {
        set: sets[2]._id,
        question: 'What is React?',
        answer: 'React. js is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications.'
    },
      {
        set: sets[2]._id,
        question: 'Who developed React?',
        answer: 'Jordan Walke, a software engineer at Facebook.'
    },

      {
        set: sets[2]._id,
        question: 'What is JSX?',
        answer: 'JSX is a shorthand for JavaScript XML.'
    },
    
    {
        set: sets[2]._id,
        question: 'Why can’t browsers read JSX?',
        answer: 'Browsers can only read JavaScript objects but JSX in not a regular JavaScript object.'
    },

    {
        set: sets[2]._id,
        question: 'What are Components',
        answer: 'Components are the building blocks of a React application’s UI. These components split up the entire UI into small independent and reusable pieces.'
    },

      {
        set: sets[2]._id,
        question: 'What is the significance of keys in React?',
        answer: 'Keys are used for identifying unique Virtual DOM Elements with their corresponding data driving the UI.'
    },

      {
        set: sets[2]._id,
        question: 'What is Redux?',
        answer: 'It is a predictable state container for JavaScript applications and is used for the entire applications state management.'
    },

      {
        set: sets[2]._id,
        question: 'What are Reducers',
        answer: 'Reducers are pure functions which specify how the application’s state changes in response to an ACTION. '
    },

      {
        set: sets[2]._id,
        question: 'What is the significance of Store in Redux?',
        answer: 'A store is a JavaScript object which can hold the application’s state and provide a few helper methods to access the state, dispatch actions and register listeners.'
    },

      {
        set: sets[2]._id,
        question: 'What is React Router?',
        answer: 'React Router is a powerful routing library built on top of React, which helps in adding new screens and flows to the application.'
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
