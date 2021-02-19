// 1) npm install, 
// 2) in one terminal "npm run json:server", 
// 3) in a second terminal "npm run dev:server"
// 4) go to localhost:4000/graphgl
// now it acts like insomnia 



const axios = require('axios');
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull
} = require('graphql');



// User Type
const UserType = new GraphQLObjectType({
    name:'User',
    fields:() => ({
        id: {type:GraphQLString},
        username: {type: GraphQLString},
        email: {type: GraphQLString},       
    })
});

// Root Query
const RootQuery= new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
        user:{
            type:UserType,
            args:{
                id:{type:GraphQLString}
            },
            resolve(parentValue, args){
               
                return axios.get('http://localhost:3000/users/'+ args.id)
                    .then(res => res.data);

            }
        },
        users:{
            type: new GraphQLList(UserType),
            resolve(parentValue, args){
                return axios.get('http://localhost:3000/users')
                    .then(res => res.data);
            }
        }
    }
});

// Mutations
const mutation = new GraphQLObjectType({
    name:'Mutation',
    fields:{
        addUser:{
            type:UserType,
            args:{
                username: {type: new GraphQLNonNull(GraphQLString)},
                email: {type: new GraphQLNonNull(GraphQLString)},
                },
            resolve(parentValue, args){
                return axios.post('http://localhost:3000/users', {
                    name:args.name,
                    email: args.email,                    
                })
                .then(res => res.data);
            }
        },
        deleteUser:{
            type:UserType,
            args:{
                id:{type: new GraphQLNonNull(GraphQLString)}
            },
            resolve(parentValue, args){
                return axios.delete('http://localhost:3000/Users/'+args.id)
                .then(res => res.data);
            }
        },
        editUser:{
            type:UserType,
            args:{
                id:{type: new GraphQLNonNull(GraphQLString)},
                username: {type: GraphQLString},
                email: {type: GraphQLString},               
            },
            resolve(parentValue, args){
                return axios.patch('http://localhost:3000/users/'+args.id, args)
                .then(res => res.data);
            }
        },
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation
});