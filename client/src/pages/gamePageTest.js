{Auth.loggedIn() && (
    <Button disabled={savedGameIds?.some((savedGameId) => savedGameId === data.getOneGame._id)}
      className="btn-block btn-info"
      onClick={() => handleSaveGame(data.getOneGame._id)}
    > Save Game
      {savedGameIds?.some(
        (savedGameId) => savedGameId === data.getOneGame._id
      )
        ? "This game has been saved!"
        : "Save this Game!"}
    </Button>
  )} 
  
{
    /* <Card.Body> */
  }
  {
    /* <p className="small">Year: {game.year}</p>
                  <Card.Text>{game.description}</Card.Text> */
  }
  {
    /* {Auth.loggedIn() && (
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
                      )} */
  }
  {
    /* </Card.Body> */