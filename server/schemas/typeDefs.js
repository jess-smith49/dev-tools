const {gql} = require('apollo-server-express');

const typeDefs = gql `
type User {
    _id: ID
    username: String
    email: String
    sets: [Sets]
}

type Sets {
    _id: ID
    setName: String
    cards: [Card]
}

type Card {
    _id: ID!
    question: String
    answer: String
}

type Auth {
    token: ID!
    user: User
}

type Query {
    me: User
    set(_id: ID!): Sets
    seededSets: [Sets]
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addSet(setName: String!): Sets
    addCard(setId: ID!, question: String!, answer: String!): Sets
    removeSet(setId: ID!): Sets
    removeCard(setId: ID!, cardId: ID!): Sets
}

`

module.exports = typeDefs;


//return the data itself: rule of thumb