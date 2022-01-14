import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_ME } from "../utils/queries";

const SavedGames = () => {
  const { data } = useQuery(GET_ME);
  const userData = data?.me || {};
  console.log(userData);

  if (!userData?.username) {
    return <h4>You need to be logged in to see this page!</h4>;
  }

  return (
    <h1>
      Welcome {userData.username}! You have {userData.gameCount} games saved!
    </h1>
  );
};

export default SavedGames;
