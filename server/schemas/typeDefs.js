const {gql} = require('apollo-server-express');
const { typeDefs } = require('.');

typeDefs = gql `
    type User {
        _id: ID
        username: String!
        email: String!
        sets: [Sets]
    }

    type Set {
        _id: ID
        setName: String:
        card: [Card]
    }

    type Card{
        _id: ID
        question: String!
        answer: String!
    }
    type Query: {
        me: User
        users: [User]
    }

    type Mutation {
        login(username: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addSet(setName: String!): User
        addCard(question: String!, answer: String!): User
        removeSet(): User
        removeCard(): User
    }
    
    `
module.exports = typeDefs;
    