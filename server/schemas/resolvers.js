const { User, Sets, Card } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

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
            throw new AuthenticationError("Not logged in");
        },

        set: async (parents, { _id }) => {
            return await Sets.findOne({ _id })
                .populate('cards');
        },
        seededSets: async (parents) => {
            // const populateSeedSet = async() => {
            return await Sets.find(
                { setName: { $in: ['test-deck-Html', 'test-deck-JavaScript', 'test-deck-React']}}
            ).populate('cards');
        }
    },

    Mutation: {
        //login mutation
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

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

        addUser: async (parent, args) => {
            const user = await User.create(args)
            const token = signToken(user);
            return { token, user };
        },

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


module.exports = resolvers;