const { gql } = require("apollo-server-express");

// typeDefs
const typeDefs = gql`
  type Game {
    _id: ID
    gameName: String
    cover: String
    year: String
    genre: [String]
    platform: [String]
    description: String
    likes: String
  }
  type User {
    _id: ID
    username: String
    email: String
    gameCount: Int
    savedGames: [Game]
  }
  type Query {
    me: User
    game: [Game]
    getOneGame: Game
  }
  type Auth {
    token: ID!
    user: User
  }
  input SavedGameInput {
    gameName: String
    cover: String
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveGame(game: SavedGameInput): User
    removeGame(gameId: String!): User
  }
`;

// export the typeDefs
module.exports = typeDefs;
