import React, { useState, useEffect } from "react";
import {
  Jumbotron,
  Container,
  Col,
  Form,
  Button,
  Card,
  CardColumns,
} from "react-bootstrap";

import Auth from "../utils/auth";
import { searchGames } from "../utils/API";
import { saveGameIds, getSavedGameIds } from "../utils/localStorage";

import { useQuery, useMutation } from "@apollo/react-hooks";
import { SAVE_GAME } from "../utils/mutations";
import { GET_ME, GET_ALL_GAMES, GET_GAME } from "../utils/queries";

const SearchGames = () => {
  // create state for holding returned IGDB api data
  const [searchedGames, setSearchedGames] = useState([]);
  // create state for holding our search field data
  const [searchInput, setSearchInput] = useState("");

  // create state to hold saved gameId values
  const [savedGameIds, setSavedGameIds] = useState(getSavedGameIds());

  // define the save game function from the mutation
  const [saveGame] = useMutation(SAVE_GAME);
  const { loading, data, error } = useQuery(GET_ALL_GAMES);

  console.log(loading, data, error);

  // set up useEffect hook to save `savedGameIds` list to localStorage on component unmount
  // learn more here: https://reactjs.org/docs/hooks-effect.html#effects-with-cleanup
  useEffect(() => {
    return () => saveGameIds(savedGameIds);
  });

  // create method to search for games and set state on form submit
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!searchInput) {
      return false;
    }

    try {
      const response = await searchGames(searchInput);

      if (!response.ok) {
        throw new Error("something went wrong!");
      }

      const { items } = await response.json();

      const gameData = items.map((game) => ({
        gameId: game.id,
        gameName: game.name,
        cover: game.cover.url,
      }));

      setSearchedGames(gameData);
      setSearchInput("");
    } catch (err) {
      console.error(err);
    }
  };

  // create function to handle saving a game to our database
  const handleSaveGame = async (gameId) => {
    // find the game in `searchedGames` state by the matching id
    const gameToSave = searchedGames.find((game) => game.gameId === gameId);

    // get token
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      await saveGame({
        variables: { game: gameToSave },
        update: (cache) => {
          const { me } = cache.readQuery({ query: GET_ME });
          // console.log(me)
          // console.log(me.savedGames)
          cache.writeQuery({
            query: GET_ME,
            data: { me: { ...me, savedGames: [...me.savedGames, gameToSave] } },
          });
        },
      });

      // if game successfully saves to user's account, save game id to state
      setSavedGameIds([...savedGameIds, gameToSave.gameId]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Jumbotron fluid className="text-light bg-dark">
        <Container>
          <h1>Search for Games!</h1>
          <Form onSubmit={handleFormSubmit}>
            <Form.Row>
              <Col xs={12} md={8}>
                <Form.Control
                  name="searchInput"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  type="text"
                  size="lg"
                  placeholder="Search for a game"
                />
              </Col>
              <Col xs={12} md={4}>
                <Button type="submit" variant="success" size="lg">
                  Submit Search
                </Button>
              </Col>
            </Form.Row>
          </Form>
        </Container>
      </Jumbotron>

      <Container>
        <h2>
          {searchedGames.length
            ? `Viewing ${searchedGames.length} results:`
            : "Search for a game to begin"}
        </h2>
        <CardColumns>
          {searchedGames.map((game) => {
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
                  <Card.Text>{game.description}</Card.Text>
                  {Auth.loggedIn() && (
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
                  )}
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </Container>
    </>
  );
};

export default SearchGames;
