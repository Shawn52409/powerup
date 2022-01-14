import React from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { GET_ME, GET_ALL_GAMES, GET_GAME } from "../utils/queries";
import { Container, CardColumns, Card, Row, Button } from "react-bootstrap";

const SearchGames = () => {
  const { loading, data, error } = useQuery(GET_ALL_GAMES);
  console.log(error, loading, data);
  if (loading) return <div>this page is loading!!!!!!!!!!!</div>;

  if (error) return <div>something went wrong</div>;
  return (
    <Container fluid>
      <h2>
        
        {/* {searchedGames.length
          ? `Viewing ${searchedGames.length} results:`
          : "Search for a game to begin"} */}
      </h2>
      {/* <Row xs={2} md={4} lg={6} className='g-2'> */}
      <div className="row row-cols-2 row-cols-lg-6 g-2 g-lg-3">
        {data.game.map((game) => {
          return (
            <Card key={game._id} border="dark" className="p-2">
              {game.cover ? (
                <Card.Img class
                src={game.cover}
                alt={`The cover for ${game.gameName}`}
                variant="top"
                style={{}}
                />
                ) : null}
                <Card.Title className="text-center">{game.gameName}</Card.Title>
              {/* <Card.Body> */}
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
              {/* </Card.Body> */}
            </Card>
          );
        })}
        </div>
      {/* </Row> */}
    </Container>
  );
};

export default SearchGames;
