import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_ME } from "../utils/queries";
import { NavLink } from "react-router-dom";
import { Container, CardColumns, Card, Row, Button } from "react-bootstrap";


const SavedGames = () => {
  const { data } = useQuery(GET_ME);
  const userData = data?.me || {};
  // console.log(userData);

  if (!userData?.username) {
    return <h1 className="text-center">You need to be logged in to see this page!</h1>;
    
  }
console.log(userData);
  return (
    <div>
    <h1 className="text-center">
      Welcome {userData.username}! You have {userData.gameCount} games saved!
      {/* {userData.savedGames[0]._id}
      {userData.savedGames[0].gameName} */}

    </h1>
    <Card key={userData.savedGames._id} border="dark" className="text-light p-1 m-2 card-equality card-hover">
      {userData.savedGames[0].cover ? (
        <Card.Img
          src={userData.savedGames[0].cover}
          alt={`The cover for ${userData.savedGames[0].gameName}`}
          variant="top"
          style={{}}
          className="card-image-size"
        />
      ) : <div>Image Not Available</div>}
      <Card.Title className="text-center pt-1">{userData.savedGames[0].gameName}</Card.Title>
      </Card>

      </div>
  );
};

export default SavedGames;
