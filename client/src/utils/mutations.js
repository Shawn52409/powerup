import gql from "graphql-tag";

export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_GAME = gql`
  mutation saveGame($gameId: String!) {
    saveGame(gameId: $gameId) {
      savedGames {
        _id
      }
    }
  }
`;
export const DELETE_GAME = gql`
  mutation deleteGame($gameId: String!) {
    deleteGame(gameId: $gameId) {
      savedGames {
        _id
      }
    }
  }
`;

