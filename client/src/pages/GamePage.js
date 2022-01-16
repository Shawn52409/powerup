import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { GET_ONE_GAME } from "../utils/queries";
import { Container, Row, Button } from "react-bootstrap";
import Auth from "../utils/auth";

const GamePage = () => {
  const { _id: gameParam } = useParams();
  const { data } = useQuery(GET_ONE_GAME, {
    variables: { _id: gameParam },
  });

  // const handleSaveGame = async (gameId) => {
  //   // find the game in `searchedGames` state by the matching id
  //   const gameToSave = searchedGames.find((game) => game.gameId === gameId);

  //   // get token
  //   const token = Auth.loggedIn() ? Auth.getToken() : null;

  //   if (!token) {
  //     return false;
  //   }

  //   try {
  //     await saveGame({
  //       variables: { game: gameToSave },
  //       update: (cache) => {
  //         const { me } = cache.readQuery({ query: GET_ME });
  //         // console.log(me)
  //         // console.log(me.savedGames)
  //         cache.writeQuery({
  //           query: GET_ME,
  //           data: { me: { ...me, savedGames: [...me.savedGames, gameToSave] } },
  //         });
  //       },
  //     });

  //     // if game successfully saves to user's account, save game id to state
  //     setSavedGameIds([...savedGameIds, gameToSave.gameId]);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };
  // If no data then wait for data
  if (!data) {
    return <div>Loading...</div>;
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
              <b>Genre:</b> {data.getOneGame.genre}
            </p>
            <p className="">
              <b>Platforms:</b> {data.getOneGame.platform}
            </p>
            <p className="">
              <b>Description:</b> {data.getOneGame.description}
            </p>
            {Auth.loggedIn() && <Button> Save Game</Button>}
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default GamePage;
