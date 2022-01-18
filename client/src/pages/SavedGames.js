import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_ME } from "../utils/queries";
import { NavLink } from "react-router-dom";
import { Container, Card } from "react-bootstrap";

const SavedGames = () => {
  const { data } = useQuery(GET_ME);
  const userData = data?.me || {};

  if (!userData?.username) {
    return (
      <div>
        <h1 className="text-center mt-4">
          Please Insert Coins to Play
        </h1>
        <p className="text-center">
          (Login Noob!)
        </p>
      </div>
    );
  }
  return (
    <Container fluid className="mt-4 justify-content-center">
      <h1 className="text-center">
        Welcome {userData.username}! You have {userData.gameCount} games saved!
      </h1>
      <div className="justify-content-center row rows-cols-sm-1 row-cols-md-3 row-cols-lg-6 g-2 g-lg-3">
        {userData.savedGames.map((savedGames) => {
          return (
            <NavLink
              key={savedGames._id}
              to={{ pathname: `/game/${savedGames._id}`, userData: userData }}
            >
              <Card
                border="dark"
                className="text-light p-1 m-2 card-equality card-hover"
              >
                {savedGames.cover ? (
                  <Card.Img
                    src={savedGames.cover}
                    alt={`The cover for ${savedGames.gameName}`}
                    variant="top"
                    style={{}}
                    className="card-image-size"
                  />
                ) : (
                  <div>Image Not Available</div>
                )}
                <Card.Title className="text-center pt-1">
                  {savedGames.gameName}
                </Card.Title>
              </Card>
            </NavLink>
          );
        })}
      </div>
    </Container>
  );
};

export default SavedGames;
