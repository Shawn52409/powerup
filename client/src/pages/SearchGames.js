import React from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { GET_ME, GET_ALL_GAMES, GET_GAME } from "../utils/queries";

const SearchGames = () => {
  const { loading, data, error } = useQuery(GET_ALL_GAMES);

  console.log(loading, data, error);
  return <h1>This is the search game tab</h1>;
};

export default SearchGames;
