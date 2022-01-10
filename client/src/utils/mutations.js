import gql from "graphql-tag";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
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
  mutation saveGame($game: SavedGameInput!) {
    saveGame(game: $game) {
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

export const REMOVE_GAME = gql`
  mutation removeGame($gameId: String!) {
    removeGame(gameId: $gameId) {
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