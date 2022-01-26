import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_ALL_GAMES } from "../utils/queries";
import { NavLink } from "react-router-dom";
import { Container, Card } from "react-bootstrap";

const SearchGames = () => {
  const { loading, data, error } = useQuery(GET_ALL_GAMES);
  if (loading) return <div className="text-center"><b>This page is loading!</b></div>;

  if (error) return <div>something went wrong</div>;
  return (
    <Container fluid className="mt-4 mb-5 justify-content-center">
      <div className="justify-content-center row rows-cols-sm-1 row-cols-md-3 row-cols-lg-6 g-2 g-lg-3">
        {data.game.map((game) => {
          return (
            <NavLink
              key={game._id}
              to={{ pathname: `/game/${game._id}`, data: data }}
            >
              <Card
                border="dark"
                className="text-light p-1 m-2 card-equality card-hover"
              >
                {game.cover ? (
                  <Card.Img
                    src={game.cover}
                    alt={`The cover for ${game.gameName}`}
                    variant="top"
                    style={{}}
                    className="card-image-size"
                  />
                ) : (
                  <div>Image Not Available</div>
                )}
                <Card.Title className="text-center pt-1">
                  {game.gameName}
                </Card.Title>
              </Card>
            </NavLink>
          );
        })}
      </div>
    </Container>
  );
};

export default SearchGames;
