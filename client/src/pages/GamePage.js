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
  if(!data){
    return(<div>Loading...</div>)}
  return (
    <Container>
      <Row>
        <div className="col-md-6">
          <img className="container-fluid" src={data.getOneGame.cover}></img>
        </div>
        <div className="col-md-6">
          <div className="card title">
            <h1 className="text-center">{data.getOneGame.gameName}</h1>
            <h2 className="text-center">{data.getOneGame.year}</h2>
            <p className=""><b>Genre:</b> {data.getOneGame.genre}</p>
            <p className=""><b>Platforms:</b> {data.getOneGame.platform}</p>
            <p className=""><b>Description:</b> {data.getOneGame.description}</p>
            <button>Save Game</button>
          </div>
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
