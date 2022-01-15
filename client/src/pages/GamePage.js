import React from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { GET_ME, GET_ALL_GAMES, GET_GAME } from "../utils/queries";
import { Container, CardColumns, Card, Row, Button } from "react-bootstrap";

const GamePage = () => {
  return (
    <Container>
      <Row>
        <div className="col-md-6">
          <div className="card title">
            <h2 className="text-center">Game Title</h2>
          </div>
          <div>Cover Image</div>
        </div>
      </Row>
    </Container>
  );
};

{
  /* <Card.Body> */
}
{
  /* <p className="small">Year: {game.year}</p>
                <Card.Text>{game.description}</Card.Text> */
}
{
  /* {Auth.loggedIn() && (
                  <Button
                  disabled={savedGameIds?.some(
                    (savedGameId) => savedGameId === game.gameId
                    )}
                    className="btn-block btn-info"
                    onClick={() => handleSaveGame(game.gameId)}
                    >
                    {savedGameIds?.some(
                      (savedGameId) => savedGameId === game.gameId
                      )
                      ? "This game has been saved!"
                      : "Save this Game!"}
                      </Button>
                    )} */
}
{
  /* </Card.Body> */
}

export default GamePage;
