import axios from 'axios';
// route to get logged in user's info (needs the token)


export const getMe = (token) => {
  return fetch("/api/users/me", {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
};

export const createUser = (userData) => {
  return fetch("/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
};

export const loginUser = (userData) => {
  return fetch("/api/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
};

// save game data for a logged in user
export const saveGame = (gameData, token) => {
  return fetch("/api/users", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(gameData),
  });
};

// remove saved game data for a logged in user
export const deleteGame = (gameId, token) => {
  return fetch(`/api/users/games/${gameId}`, {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};
export const searchIGDB = (query) => {
  console.log('Here I am');
  axios({
    url: "https://api.igdb.com/v4/games",
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Client-ID': 'g6khuxmyhhis2798jq0xrct30n0hu5',
        'Authorization': 'Bearer gzfk5fal0pgw6guvnh50v6qdfyjv3i',
    },
    data: `fields name, cover.url; search "${query}"; limit 30;`
  })
    .then(response => {
        console.log(response.data);
        return response.data;
    })
    .catch(err => {
        console.error(err);    
    });
    // return fetch(`https://www.googleapis.com/games/v1/volumes?q=${query}`);
  };