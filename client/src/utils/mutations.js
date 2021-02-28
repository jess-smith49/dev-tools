// linking graphql and extending model.
import gql from 'graphql-tag';
// declairing user CRUD function. 
export const LOGIN_USER = gql `
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`
// declairing user CRUD function. 
export const ADD_USER = gql `
    mutation addUser($username: String!, $email: String!, $password: String!){
        addUser(username: $username, email: $email, password: $password){
            token
            user {
                _id
                username
            }
        }
    }
`
// declairing set CRUD function. 
export const ADD_SET = gql `
    mutation addSet($setName: String!){
        addSet(setName: $setName) {
            
                _id
                setName
                    cards {
                    _id
                    question
                    answer
                }
            
           
        }
    }
`
// declairing card CRUD function. 
export const ADD_CARD = gql `
    mutation addCard($setId: ID!, $question: String!, $answer: String!){
        addCard(setId: $setId, question: $question, answer: $answer){
            set {
                _id
                setName
                card {
                    _id
                    question
                    answer
                }
            }
        }
    }
    `
// declairing set CRUD function. 
export const REMOVE_SET = gql `
    mutation removeSet($setId: ID!){
        removeSet(setId: $setId){
            set {
                _id
                setName
                card {
                    _id
                    question 
                    answer
                }
            }
        }
    }
`
// declairing card CRUD function. 
export const REMOVE_CARD = gql `
    mutation removeCard($setId: ID!, $cardId: ID!){
        removeCard(setId: $setId, cardId: $cardId){
            set {
                _id
                setName 
                card {
                    _id
                    question
                    answer
                }
            }
        }
    }
`

