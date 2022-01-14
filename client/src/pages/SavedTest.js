import React from "react";
import {
  Jumbotron,
  Container,
  CardColumns,
  Card,
  Button,
} from "react-bootstrap";

import { useQuery, useMutation } from "@apollo/react-hooks";
import { GET_ME } from "../utils/queries";
import { REMOVE_GAME } from "../utils/mutations";
import Auth from "../utils/auth";
import { removeGameId } from "../utils/localStorage";

const SavedGames = () => {
  const { loading, data } = useQuery(GET_ME);
  const [deleteGame] = useMutation(REMOVE_GAME);
  const userData = data?.me || {};

  if (!userData?.username) {
    return (
      <h4>
        You need to be logged in to see this page. Use the navigation links
        above to sign up or log in!
      </h4>
    );
  }

  // create function that accepts the game's mongo _id value as param and deletes the game from the database
  const handleDeleteGame = async (gameId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      await deleteGame({
        variables: { gameId: gameId },
        update: (cache) => {
          const data = cache.readQuery({ query: GET_ME });
          const userDataCache = data.me;
          const savedGamesCache = userDataCache.savedGames;
          const updatedGameCache = savedGamesCache.filter(
            (game) => game.gameId !== gameId
          );
          data.me.savedGames = updatedGameCache;
          cache.writeQuery({
            query: GET_ME,
            data: { data: { ...data.me.savedGames } },
          });
        },
      });
      // upon success, remove game's id from localStorage
      removeGameId(gameId);
    } catch (err) {
      console.error(err);
    }
  };
  // if data isn't here yet, say so
  if (loading) {
    return <h2>LOADING...</h2>;
  }

  return (
    <>
      <Jumbotron fluid className="text-light bg-dark">
        <Container>
          <h1>Viewing saved games!</h1>
        </Container>
      </Jumbotron>
      <Container>
        <h2>
          {userData.savedGames.length
            ? `Viewing ${userData.savedGames.length} saved ${
                userData.savedGames.length === 1 ? "game" : "games"
              }:`
            : "You have no saved games!"}
        </h2>
        <CardColumns>
          {userData.savedGames.map((game) => {
            return (
              <Card key={game.gameId} border="dark">
                {game.image ? (
                  <Card.Img
                    src={game.image}
                    alt={`The cover for ${game.title}`}
                    variant="top"
                  />
                ) : null}
                <Card.Body>
                  <Card.Title>{game.title}</Card.Title>
                  <p className="small">Authors: {game.authors}</p>
                  {game.link ? (
                    <Card.Text>
                      <a
                        href={game.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        More Information on Google Games
                      </a>
                    </Card.Text>
                  ) : null}
                  <Card.Text>{game.description}</Card.Text>
                  <Button
                    className="btn-block btn-danger"
                    onClick={() => handleDeleteGame(game.gameId)}
                  >
                    Delete this Game
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </Container>
    </>
  );
};

export default SavedGames;
