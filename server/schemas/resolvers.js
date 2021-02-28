// linking models
const { User, Sets, Card } = require('../models');
// linking react middle ware
const { AuthenticationError } = require('apollo-server-express');
// linking auth file
const { signToken } = require('../utils/auth');

// declaring reslovers. 
const resolvers = {
    // me query
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const user = await User.findOne(
                    { _id: context.user._id })
                    .select('-__v -password')
                    .populate('sets')
                    .populate(
                        {
                            path: 'sets',
                            populate: { path: 'cards' }
                        }
                    );

                return user;
            }
            // verifying log in. 
            throw new AuthenticationError("Not logged in");
        },
        // remove these two in final code
        // cards: async(parent, args) => {            

        //     return await Card.find();
        // },

        // sets: async() => {
        //     return await Sets.find().populate('cards');
        // },

        // set query
        set: async (parents, { setName }) => {
            return await Sets.findOne({ setName })
                .populate('cards');
        },
        // seeding sets
        seededSets: async (parents) => {
            // const populateSeedSet = async() => {
            return await Sets.find(
                { setName: { $in: ['test-deck-Html', 'test-deck-JavaScript', 'test-deck-React']}}
            ).populate('cards');
        }
    },

    // declaring mutations. 
    Mutation: {
        //login mutation
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            // verifying user
            if (!user) {
                throw new AuthenticationError('No User Found With That Email');
            }

            const correctPass = await user.isCorrectPassword(password);

            if (!correctPass) {
                throw new AuthenticationError('Re-enter Your Password');
            }
            const token = signToken(user);
            return { token, user };

        },
        // creating user
        addUser: async (parent, args) => {
            const user = await User.create(args)
            const token = signToken(user);
            return { token, user };
        },
        // creating a set
        addSet: async (parent, args, context) => {
            if (context.user) {
                const newSet = await Sets.create(args);
                await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { sets: newSet } },
                    { new: true }
                ).populate('cards');
                return newSet;
            }
            throw new AuthenticationError('You need to be logged in!')

        },
        // creating a card
        addCard: async (parent, { setId, question, answer }, context) => {

            if (context.user) {
                const newCard = await Card.create({ question, answer });
                await Sets.findByIdAndUpdate(
                    { _id: setId },
                    { $push: { cards: newCard } },
                    { new: true }
                );

                return newCard;
            }

        },
        // deleteing a set. 
        removeSet: async (parent, { setId }, context) => {
            if (context.user) {
                const deleteSet = await Sets.findOneAndDelete({ _id: setId });

                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { sets: { deleteSet } } },
                    { new: true }
                );

                return updatedUser;
            }
        },
        // deleting a card.
        removeCard: async (parent, { setId, cardId }, context) => {
            if (context.user) {
                const deleteCard = await Card.findOneAndDelete({ _id: cardId });

                const updatedSet = await Sets.findOneAndUpdate(
                    { _id: setId },
                    { $pull: { cards: { deleteCard } } },
                    { new: true }
                ).populate('cards');

                return updatedSet;
            }

        }
    }

};

// exporting to app
module.exports = resolvers;