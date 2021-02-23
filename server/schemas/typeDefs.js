const {gql} = require('apollo-server-express');

const typeDefs = gql `
type User {
    _id: ID!
    username: String!
    email: String!
    set: [Set]
}

type Set {
    _id: ID!
    setName: String!
    card: [Card]
}

type Card {
    _id: ID!
    set: Set
    question: String!
    answer: String!
}

type Auth {
    token: ID!
    user: User
}

type Query {
    me: User
    sets: [Set]
    cards(set: ID, name: String): [Card]
    card(_id: ID!): Card
    users: [User]

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