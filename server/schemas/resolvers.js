const {User, Sets, Card} = require('../models');
const {AuthenticationError} = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
       // me query
       Query: {
        me: async(parent, args, context) => {
            if(context.user){
                const user = await User.findOne(
                    {_id: context.user._id})
                    //.select('-__v -password')
                    return user;
            }
            throw new AuthenticationError("Not logged in");
        },

        cards: async(parent, args) => {            
            
            return Card.find();
        },
        set: async() => {
            return await Sets.find().populate('cards');
        }
    },

    Mutation: {
        //login mutation
            login: async(parent, {email, password}) => {
                const user = await User.findOne({email});

                if(!user){
                    throw new AuthenticationError('No User Found With That Email');
                }

                const correctPass = await user.isCorrectPassword(password);

                if(!correctPass){
                    throw new AuthenticationError('Re-enter Your Password');
                }
                    const token = signToken(user);
                    return {token, user};
                
            },

            addUser: async(parent, args) => {
                const user = await User.create(args)
                const token = signToken(user);
                console.log("hello")
                return {token, user};
            },

            addSet: async(parent, {setName}, context) => {
                //if(context.user){
                //     const newSet = await Sets.create(
                //             {set: setName},
                //             //{$push: {setName: newSet}}
                //             {new: true}

                //     )
                    
                //     const updatedUser = await User.findOneAndUpdate(
                //         {_id: context.user_id},
                //         {$push: {setName: newSet}},
                //         {new: true}
                //     )
                // return updatedUser;
                
                
                //throw new AuthenticationError('You need to be logged in!');
                ///CREATING A NEW SET
                if(context.user){
                    console.log(context)
                    const newSet = new Sets({setName});

                    await User.findOneAndUpdate(
                        {_id: context.user_id},
                        //{$push: {setName: newSet}},
                        {$push: {sets: {setName}}},
                        {new: true}
                    )

                    return newSet
                }
                throw new AuthenticationError('Not logged in');
                
              
            },

            addCard: async(parent, {question, answer}, context) => {

                // const newCard = new Card({question: question, answer: answer});

                //  return newCard
                if(context.user){
                    const newCard = await Card.create(
                        { question: question, answer: answer},
                        {new: true}
                    )
                    const updatedSet = await Sets.findOneAndUpdate(
                        {_id: setId},
                        {$push: {card: newCard}},
                        {new: true}
                    )
                return updatedSet;
              }
                //return newCard;
                
            },

            removeSet: async(parent, {setName}, context) => {
                if(context.user){
                    const updatedUser = await User.findOneAndUpdate(
                        {_id: context.user_id},
                        {$pull: {sets: setName}},
                        {new: true}
                    );

                    return updatedUser;
                }
            },

            removeCard: async(parent, {question, answer}, context) => {
                if(context.user) {
                    const deleteCard = await Card.findOneAndDelete(
                        {question: question, answer: answer},
                        {$pull: {id: card._id}}
                        
                    )
                    const updatedSet = await Sets.findOneAndUpdate(
                        {_id: context.user_id},
                        {$pull: {cards: deleteCard}},
                        {new: true}
                    )
                return updatedSet;

                }
            }

        }
};

module.exports = resolvers;