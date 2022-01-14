import React from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { GET_ME, GET_ALL_GAMES, GET_GAME } from "../utils/queries";
import { Container, CardColumns, Card, Button } from "react-bootstrap";

const SearchGames = () => {
  const { loading, data, error } = useQuery(GET_ALL_GAMES);
  console.log(error, loading, data);
  if (loading) return <div>this page is loading!!!!!!!!!!!</div>;

  if (error) return <div>something went wrong</div>;
  return (
    <Container>
      <h2>
        Search Bar
        {/* {searchedGames.length
          ? `Viewing ${searchedGames.length} results:`
          : "Search for a game to begin"} */}
      </h2>
      <CardColumns>
        {data.game.map((game) => {
          return (
            <Card key={game._id} border="dark">
              <Card.Title className="text-center">{game.gameName}</Card.Title>
              {game.cover ? (
                <Card.Img
                  src={game.cover}
                  alt={`The cover for ${game.gameName}`}
                  variant="top"
                  style={{}}
                />
              ) : null}
              <Card.Body>
                {/* <p className="small">Year: {game.year}</p>
                <Card.Text>{game.description}</Card.Text> */}
                {/* {Auth.loggedIn() && (
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
                )} */}
              </Card.Body>
            </Card>
          );
        })}
      </CardColumns>
    </Container>
  );
};

export default SearchGames;
