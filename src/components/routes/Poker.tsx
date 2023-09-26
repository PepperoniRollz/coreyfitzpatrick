import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { Card, CardSet } from "../../components/Card";

import Td from "../../images/cards/2color/AH.svg";
import Kh from "../../images/cards/2color/KH.svg";

const numPlayers = 2;

function Poker() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [heroCards, setHeroCards] = useState("");
  const [villainCards, setVillainCards] = useState("");
  const [board, setBoard] = useState("");

  const handlePost = () => {
    fetch("http://localhost:8080/api/equity", {
      method: "POST",
      body: JSON.stringify({
        // HoleCards: [
        //   { Cards: [{ Value: 52 }, { Value: 51 }] },
        //   { Cards: [{ Value: 19 }, { Value: 23 }] },
        //   { Cards: [{ Value: 12 }, { Value: 11 }] },
        // ],
        Players: [new CardSet(heroCards), new CardSet(villainCards)],
        Board: new CardSet(board),
      }),
    })
      .then(function (response) {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(response);
      })
      .then(function (data) {
        console.log(data);
      })
      .catch(function (error) {
        console.warn("Something went wrong.", error);
      });
  };

  return (
    <Box
      justifyContent="left"
      alignItems="center"
      display="flex"
      flexDirection="column"
    >
      <h2>Equity Calculator</h2>
      <Box>
        <img src={Td} alt="Logo" height="250px" />
        <img src={Kh} alt="Logo" height="250px" />
      </Box>

      <p>Enter hands and stuff (ace of hearts & king of hearts is AhKh)</p>
      <p>
        Example: hero has ace of hearts and king of hearts, villain has 6 of
        diamonds and 7 of diamonds, and board is 789 all clubs
      </p>
      <p>Hero: AhKh, Villain: 6d7d, Board: 7c8c9c</p>

      <Box>
        <TextField
          size="small"
          id="outlined-basic"
          label={`Hero`}
          variant="outlined"
          sx={{ m: 1, width: "25ch" }}
          onChange={(e) => {
            setHeroCards(e.target.value);
          }}
        />
      </Box>
      <Box>
        <TextField
          size="small"
          id="outlined-basic"
          label={`Villain 1`}
          variant="outlined"
          sx={{ m: 1, width: "25ch" }}
          onChange={(e) => {
            setVillainCards(e.target.value);
          }}
        />
      </Box>
      <TextField
        size="small"
        id="outlined-basic"
        label={`Board`}
        variant="outlined"
        sx={{ m: 1, width: "25ch" }}
        onChange={(e) => {
          setBoard(e.target.value);
        }}
      />
      <Button variant="contained" onClick={handlePost}>
        Submit
      </Button>
    </Box>
  );
}

export default Poker;
