import React from "react";
import { useParams } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { GET_ME, GET_ALL_GAMES, GET_ONE_GAME } from "../utils/queries";
import { Container, CardColumns, Card, Row, Button } from "react-bootstrap";

const GamePage = () => {
  const { _id: gameParam } = useParams();
  console.log(gameParam);

  const { loading, data, error } = useQuery(GET_ONE_GAME, {
    variables: { _id: gameParam },
  });
  console.log("I'm on the game page");
  console.log(data);

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
