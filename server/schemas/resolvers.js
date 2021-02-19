const {User} = require('../models');
const {AuthenticationError} = require('apollo-server-express');

const resolvers = {
       // me query
       Query: {
        me: async(parent, args, context) => {
            if(context.user){
                const user = await User.findOne(
                    {_id: context.user._id})
                    .select('-__v-password')
                    return user;
            }
        },
        user: async (parent, { username }) => {
            return User.findOne({ username })
              .populate('sets')
              .select('-__v -password');
              .select('-__v -password');
            },

        
        set: async (parent, arg, context) => {
            if (context.user) {
                const set = await Set.findById(context.set._id).populate({
                  set:'setName'
                });
            return set;
        }}
    },

        card: async (parent, arg, context) => {
            if (context.user) {
                const card = await Card.findById(contex.card._id).populate({
                    question:'question',
                    answer:'answer'
                });
                return card;
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

            addSet: async(parent, {setName}, context) => {
                if(context.user){
                    const updatedUser = await User.findOneAndUpdate(
                        {_id: context.user_id},
                        {$push: {set: setName}},
                        {new: true}
                    )
                return updatedUser;
                }
              
            },

            addCard: async(parent, {cardData}, context) => {
                if(context.user){
                    const updatedSet = await Set.findOneAndUpdate(
                        {_id: context.user._id},
                        {$push: {cards: cardData}},
                        {new: true}
                    )
                return updatedSet;
                }
                
            },

            removeSet: async(parent, {setData}, context) => {
                if(context.user){
                    const updatedUser = await User.findOneAndUpdate(
                        {_id: context.user_id},
                        {$pull: {sets: setData}},
                        {new: true}
                    );

                    return updatedUser;
                }
            },

            removeCard: async(parent, {cardData}, context) => {
                if(context.user) {
                    const updatedSet = await Set.findOneAndUpdate(
                        {_id: context.user_id},
                        {$pull: {cards: cardData}},
                        {new: true}
                    )
                return updatedSet;

                }
            }

        }
};

module.exports = resolvers;