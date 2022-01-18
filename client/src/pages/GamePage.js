import React from "react";
import { useParams } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { SAVE_GAME } from "../utils/mutations";
import { GET_ONE_GAME} from "../utils/queries";
import { Container, Row, Button } from "react-bootstrap";
import Auth from "../utils/auth";
import PrettyArray from "../utils/prettyArray";

const GamePage = () => {
  const { _id: gameParam } = useParams();
  const { data } = useQuery(GET_ONE_GAME, {
    variables: { _id: gameParam },
  });

  const [saveGame] = useMutation(SAVE_GAME)

  if (!data) {
    return <div className="text-center"><b>This page is loading!</b></div>;
  }

  async function buttonclick() {
    const userSavedInfo = await saveGame({ variables: {gameId: data.getOneGame._id} });
    window.location.assign('/mygames')
  }

  return (
    <Container>
      <Row>
        <div className="col-md-6">
          <img
            className="container-fluid"
            src={data.getOneGame.cover}
            alt="Unavaible"
          ></img>
        </div>
        <div className="col-md-6">
          <div className="card title">
            <h1 className="text-center">{data.getOneGame.gameName}</h1>
            <h2 className="text-center">{data.getOneGame.year}</h2>
            <p className="">
              <b>Genre:</b> {PrettyArray.printArray(data.getOneGame.genre)}
            </p>
            <p className="">
              <b>Platforms:</b>{" "}
              {PrettyArray.printArray(data.getOneGame.platform)}
            </p>
            <p className="">
              <b>Description:</b> {data.getOneGame.description}
            </p>
            {Auth.loggedIn() && (
              <Button onClick={buttonclick}> Save Game</Button>
            )}
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default GamePage;
