import React from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { GET_ME, GET_ALL_GAMES, GET_GAME } from "../utils/queries";
import { NavLink } from "react-router-dom";
import { Container, CardColumns, Card, Row, Button } from "react-bootstrap";

const SearchGames = () => {
  const { loading, data, error } = useQuery(GET_ALL_GAMES);
  console.log(error, loading, data);
  if (loading) return <div>this page is loading!!!!!!!!!!!</div>;

  if (error) return <div>something went wrong</div>;
  return (
    <Container fluid>
      <div className="row rows-cols-sm-1 row-cols-lg-6 g-2 g-lg-3">
        {data.game.map((game) => {
          return (
            <NavLink to={{ pathname: `/game/${game._id}`, data: data }}>
              <Card key={game._id} border="dark" className="p-2">
                {game.cover ? (
                  <Card.Img
                    src={game.cover}
                    alt={`The cover for ${game.gameName}`}
                    variant="top"
                    style={{}}
                  />
                ) : null}
                <Card.Title className="text-center">{game.gameName}</Card.Title>
              </Card>
            </NavLink>
          );
        })}
      </div>
      {/* </Row> */}
    </Container>
  );
};

export default SearchGames;
