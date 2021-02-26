const {User, Sets, Card} = require('../models');
const {AuthenticationError} = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const { set } = require('../config/connection');

const resolvers = {
       // me query
       Query: {
        me: async(parent, args, context) => {
            if(context.user){
                const user = await User.findOne(
                    {_id: context.user._id})
                    .select('-__v -password')
                    .populate('sets')
                    //.populate('cards')

                    return user;
            }
            throw new AuthenticationError("Not logged in");
        },

        cards: async(parent, args) => {            
            
            return await Card.find();
        },
        sets: async() => {
            return await Sets.find().populate('cards');
        },
        set: async(parents, {setName}) => {
            return await Sets.findOne({ setName })
                .populate('cards');
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
                return {token, user};
            },

            addSet: async (parent, args, context) => {
                if(context.user){
                    const newSet = await Sets.create(args);
                    await User.findByIdAndUpdate(
                        {_id: context.user._id},
                        {$push: {sets: newSet}},
                        {new: true}
                    )
                    return newSet;
                }
                throw new AuthenticationError('You need to be logged in!')
              
            },

            addCard: async(parent, { setId, question, answer}, context) => {
                console.log(question);
                console.log(answer);
                if(context.user){
                    const newCard = await Card.create({question, answer});
                    await Sets.findOneAndUpdate(
                        {_id: setId},
                        {$push: {cards: newCard}},
                        {new: true}
                    )//.populate('cards')

                return newCard;
                }
                
            },

            removeSet: async(parent, {setId}, context) => {
                if(context.user){
                    const updatedUser = await User.findOneAndUpdate(
                        {_id: context.user._id},
                        {$pull: {sets: setId } },
                        {new: true}
                    );

                    return updatedUser;
                }
            },

            removeCard: async(parent, {cardId}, context) => {
                if(context.user) {
                    const deleteCard = await Card.findOneAndDelete(
                        {_id: cardId},
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