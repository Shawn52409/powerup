import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_ME } from "../utils/queries";
import { NavLink } from "react-router-dom";
import { Container, CardColumns, Card, Row, Button } from "react-bootstrap";


const SavedGames = () => {
  const { data } = useQuery(GET_ME);
  const userData = data?.me || {};
  console.log(userData);

  if (!userData?.username) {
    return <h1 className="text-center">You need to be logged in to see this page!</h1>;
    
  }
console.log(userData);
  return (
    <div>
    <h1 className="text-center">
      Welcome {userData.username}! You have {userData.gameCount} games saved!
    </h1>
      </div>
  );
};

export default SavedGames;
