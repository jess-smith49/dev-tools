const {gql} = require('apollo-server-express');
const { typeDefs } = require('.');

typeDefs = gql `
    type User {
        _id: ID
        username: String!
        email: String!
    }

    

    type Query: {
        me: User
        users: [User]
    }

    type Mutation {
        login(username: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        
    }
    
    `
module.exports = typeDefs;
    