import React from "react";
import { useParams } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { SAVE_GAME, DELETE_GAME } from "../utils/mutations";
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
  const [deleteGame] = useMutation(DELETE_GAME)

  if (!data) {
    return <div className="text-center"><b>This page is loading!</b></div>;
  }

  async function saveButtonClick() {
    const userSavedInfo = await saveGame({ variables: {gameId: data.getOneGame._id} });
    window.location.assign('/mygames')
  }
  async function deleteButtonClick() {
    const userSavedInfo = await deleteGame({ variables: {gameId: data.getOneGame._id} });
    window.location.assign('/')
  }

  return (
    <Container className="mt-4 mb-5">
      <Row>
        <div className="col-md-6">
          <img
            className="container-fluid"
            src={data.getOneGame.cover}
            alt="Unavaible"
          ></img>
        </div>
        <div className="col-md-6">
          <div className="card title px-2 bg-blue">
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
              <Button className='mb-2' onClick={saveButtonClick}> Save Game</Button>
            )}
            {Auth.loggedIn() && (
              <Button className='mb-2 bg-danger' onClick={deleteButtonClick}> Delete Game</Button>
            )}
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default GamePage;
