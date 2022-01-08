const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type Game {
    _id: ID
    gameName: String
    cover: String
    publisher: String
    releaseDate: String
    esrbRating: String
    likes: String
  }

  type User {
    _id: ID
    userName: String
    email: String
    password: String
    favoriteGame: 
  }

  type Mutation {
    addUser(userName: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }

`;


module.exports = typeDefs;
