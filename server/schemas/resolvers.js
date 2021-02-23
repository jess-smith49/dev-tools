const {User, Sets, Card } = require('../models');
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

        users: async () => {
            return User.find()
              .select('-__v -password')
              .populate('set')
              .populate('card');
          },

        user: async (parent, { username }) => {
            return User.findOne({ username })
              .select('-__v -password');
            //   .populate('set')
            //   .populate('card');
          },

        cards: async() => {  
            
            return Card.find();
        },

        card: async (parent, { _id }) => {
            return await Card.findById({ _id });
        },

        sets: async() => {
            return await Sets.find()
            .populate({
                path: 'set.setName',
                populate: 'card'
            });
        },

        set: async(parent, { setName }) => {
            return await Sets.findOne({ setName })
            .populate({
                path: 'set.setName',
                populate: 'card'
            });
        },     

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
                console.log(args)
                const user = await User.create(args)
                const token = signToken(user);
                console.log("hello")
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

            addCard: async(parent, {question, answer}, context) => {
                if(context.user){
                    const newCard = await Card.create(
                        {set: set, question: question, answer: answer},
                        {new: true}
                    )
                    const updatedSet = await Sets.findOneAndUpdate(
                        {_id: context.user._id},
                        {$push: {card: newCard}},
                        {new: true}
                    )
                return updatedSet;
                }
                
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