import gql from "graphql-tag";

export const GET_ME = gql`
  {
    me {
      _id
      username
      email
      gameCount
      savedGames {
        gameName
        cover
      }
    }
  }
`;

export const GET_ALL_GAMES = gql`
  {
    game {
      _id
      gameName
      cover
      year
      genre
      platform
      description
    }
  }
`;
export const GET_ONE_GAME = gql`
  query getOneGame($gameID: ID!) {
    game(gameID: $gameID) {
      _id
      gameName
      cover
      year
      genre
      platform
      description
    }
  }
`;
