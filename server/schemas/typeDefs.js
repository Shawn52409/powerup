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
    getOneGame(_id: String): Game
  }
  type Auth {
    token: ID!
    user: User
  }

  type Mutation {
    login(username: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveGame(gameId: String!): User
    deleteGame(gameId: String!): User
  }
`;

// export the typeDefs
module.exports = typeDefs;
