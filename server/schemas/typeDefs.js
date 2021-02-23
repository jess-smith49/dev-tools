const {gql} = require('apollo-server-express');

const typeDefs = gql `
type User {
    _id: ID
    username: String
    email: String
    sets: [Set]
}

type Set {
    _id: ID
    setName: String
    cards: [Card]
}

type Card {
    _id: ID
    question: String
    answer: String
    set: String
}

type Auth {
    token: ID
    user: User
}

type Query {
    me: User
    users: [User]
    user(username: String!): User 
    sets: [Set]
    set(setName: String): Set
    cards(setName: String): [Card]
    card(_id: ID!): Card
    

}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addSet(setName: String!): Set
    addCard(question: String!, answer: String!): Set
    removeSet(setId: ID!): Set
    removeCard(cardId: ID!): Set
}

`

module.exports = typeDefs;


//return the data itself: rule of thumb