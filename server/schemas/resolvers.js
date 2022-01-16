const { User, Game } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select(
          "-__v -password"
        );
        return userData;
        // console.log(userData)
        // const savedGames = await Game.find({
        //   _id: {$in: userData.savedGames}
        // })
        // return {...userData, savedGames};
      }
      throw new AuthenticationError("Not logged in");
    },
    game: async (parent, args, context) => {
      const allGames = await Game.find({});
      // console.log(allGames);
      return allGames;
    },
    getOneGame: async (parent, { _id }) => {
      console.log(_id)
      return await Game.findOne({ _id: _id });
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }
      const token = signToken(user);
      return { token, user };
    },
    saveGame: async (parent, { gameId }, context) => {
      // console.log(gameId);
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { savedGames: gameId } },
          { new: true }          
        );
        const savedGames = await Game.find({
          _id: {$in: updatedUser.savedGames}
        })
        console.log(updatedUser);
        return {...updatedUser, savedGames};
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;
