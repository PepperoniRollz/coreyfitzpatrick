import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import { CardSet } from "../../components/Card";
import PlayerFields from "../PlayerFields";
import { Divider, Grid, Typography } from "@mui/material";
import CardDialog from "../CardDialog";

interface EquityEvaluation {
  equities: {
    Equities: number[];
    TieEquity: number[];
    Wins: number[];
    Losses: number[];
    Ties: number[];
    HoleCards: CardSet[];
    Board: CardSet;
  };
}

type PlayerFieldData = {
  cards: string;
  equity: number;
};

function Poker() {
  //================================================================================================
  //state
  //================================================================================================
  const [selectedPlayerCards, setSelectedPlayerCards] = useState<string[]>([]);
  const [selectedBoardCards, setSelectedBoardCards] = useState<string[]>([]);
  const [selectedDeadCards, setSelectedDeadCards] = useState<string[]>([]);

  const [equityEvaluation, setEquityEvaluation] = useState(
    {} as EquityEvaluation
  );

  const [open, setOpen] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState(0);
  const [playerFieldValues, setPlayerFieldValues] = useState<PlayerFieldData[]>(
    new Array(12).fill({ cards: "", equity: 0 })
  );
  const [boardFieldValues, setBoardFieldValues] = useState<string[]>([]);

  const [deadCardsFieldValues, setDeadCardsFieldValues] = useState<string[]>(
    []
  );

  const handlePlayerFieldChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newValues = [...playerFieldValues];
    newValues[selectedPlayer] = {
      cards: event.target.value,
      equity: 0,
    };
    setPlayerFieldValues(newValues);
  };

  const handleBoardTextChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newValues = [...boardFieldValues];
    newValues[selectedPlayer] = event.target.value;
    setBoardFieldValues(newValues);
  };

  const handleDeadCardsTextChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newValues = [...deadCardsFieldValues];
    // newValues[selectedPlayer] = event.target.value;
    setDeadCardsFieldValues(newValues);
  };

  //================================================================================================
  //handlers
  //================================================================================================

  useEffect(() => {
    const newValues = [...playerFieldValues];

    // newValues[selectedPlayer] = selectedCards.join("");
    newValues[selectedPlayer] = {
      cards: selectedPlayerCards.join(""),
      equity: 0,
    };

    // setTextFieldValues(newValues);
    setPlayerFieldValues(newValues);
  }, [selectedPlayerCards]);

  useEffect(() => {
    const newValues = [...boardFieldValues];
    // newValues[selectedPlayer] = selectedBoardCards.join("");
    setBoardFieldValues(newValues);
  }, [selectedBoardCards]);

  useEffect(() => {
    const newValues = [...deadCardsFieldValues];
    // newValues[selectedPlayer] = selectedDeadCards.join("");
    setDeadCardsFieldValues(newValues);
  }, [selectedDeadCards]);

  useEffect(() => {
    const newValues = [...playerFieldValues];
    equityEvaluation.equities &&
      newValues.forEach((player, index) => {
        player.equity = equityEvaluation.equities.Equities[index];
      });
    setPlayerFieldValues(newValues);
  }, [equityEvaluation]);

  const convertToCards = (
    playerCards: string[]
  ): { Players: CardSet[]; Board: CardSet } => {
    const players: CardSet[] = [];
    console.log("boardfieldvalues", boardFieldValues);
    const boardCards = new CardSet(selectedBoardCards.join(""));
    playerCards.forEach((cards) => {
      if (cards.length === 4) {
        players.push(new CardSet(cards));
      }
    });
    console.log("ABOUT TO SEND THIS", { players, boardCards });
    return { Players: players, Board: boardCards };
  };
  console.log("playerfieldvales", playerFieldValues);
  const handlePost = () => {
    // console.log(PlayingCardsList);
    const { Players, Board } = convertToCards(
      playerFieldValues.map((p) => p.cards)
    );
    console.log("players", Players);
    console.log("board", Board);

    fetch("http://ec2-3-85-15-107.compute-1.amazonaws.com:8080/api/equity", {
      method: "POST",
      body: JSON.stringify({
        Players: Players,
        Board: Board,
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
        setEquityEvaluation(data);
      })
      .catch(function (error) {
        console.warn("Something went wrong.", error);
      });
  };

  const handleCardClick = (cardId: string, type: string) => {
    if (selectedPlayer === 11) {
      setSelectedBoardCards((prevSelected) => {
        if (prevSelected.includes(cardId)) {
          // Deselect if already selected
          return prevSelected.filter((id) => id !== cardId);
        } else if (prevSelected.length < 4) {
          return [...prevSelected, cardId];
        } else {
          // Replace the oldest selection with the new one
          return [...prevSelected.slice(1), cardId];
        }
      });
    } else if (selectedPlayer === 12) {
      setSelectedDeadCards((prevSelected) => {
        console.log("dead card selector clicked");
        if (prevSelected.includes(cardId)) {
          // Deselect if already selected
          return prevSelected.filter((id) => id !== cardId);
        } else if (prevSelected.length < 48) {
          return [...prevSelected, cardId];
        } else {
          // Replace the oldest selection with the new one
          return [prevSelected[1], cardId];
        }
      });
    } else {
      setSelectedPlayerCards((prevSelected) => {
        console.log("player card selector clicked", cardId, prevSelected);
        if (prevSelected.includes(cardId)) {
          // Deselect if already selected
          return prevSelected.filter((id) => id !== cardId);
        } else if (prevSelected.length < 2) {
          return [...prevSelected, cardId];
        } else {
          // Replace the oldest selection with the new one
          return [prevSelected[1], cardId];
        }
      });
    }
  };
  const handleClickOpen = (index: number) => {
    setOpen(true);
    setSelectedPlayer(index);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //================================================================================================
  //component
  //================================================================================================

  return (
    <>
      <Grid
        container
        spacing={5}
        paddingTop={"2%"}
        height={"100vh"}
        paddingBottom={"2%"}
      >
        <Box sx={{ width: "100%", marginTop: 2, marginX: 50 }}>
          {/* Adjust the margin as needed */}
          <Typography variant="h4" align="left" gutterBottom>
            {"Poker."}
          </Typography>
          <Divider sx={{ borderColor: "#000000" }} />
        </Box>
        <Box sx={{ borderColor: "primary.main" }}>
          <Grid item xs={12} marginLeft={50} marginRight={50}>
            <Typography variant="body1" align={"left"}>
              An equity calculator for Texas Holdem. Enter player and board/dead
              cards to evaluate win equity. **Temporarily down to AWS costs**
            </Typography>
          </Grid>
        </Box>
        <Grid item xs={12} marginLeft={50} marginRight={50}></Grid>
        <Grid container spacing={2} marginX={50}>
          {/* ================================ Player Fields ================================ */}

          <Grid item xs={8}>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((value, index) => (
              <PlayerFields
                selectedPlayerCards={selectedPlayerCards}
                handleClickOpen={handleClickOpen}
                index={index}
                key={index}
                onTextChange={(e) => handlePlayerFieldChange(e)}
                textValue={playerFieldValues[index].cards}
                onFocus={() => setSelectedPlayer(index)}
                equity={playerFieldValues[index].equity}
              />
            ))}
          </Grid>
          <Grid item xs={4}>
            <Grid container spacing={1} alignItems="center">
              {/* ================================ Board Fields ================================ */}

              <Grid item>
                <Button
                  onClick={() => handleClickOpen(11)}
                  size="small"
                  sx={{ color: "blue" }}
                >
                  Cards
                </Button>{" "}
              </Grid>
              <Grid item>
                <TextField
                  size="small"
                  label={"Board"}
                  onChange={handleBoardTextChange}
                  value={selectedBoardCards.join("")}
                />
              </Grid>
            </Grid>{" "}
            {/* ================================ dead cards ================================ */}
            <Grid container spacing={1} alignItems="center">
              <Grid item>
                <Button
                  onClick={() => handleClickOpen(12)}
                  size="small"
                  sx={{ color: "blue" }}
                >
                  Cards
                </Button>{" "}
              </Grid>

              <Grid item>
                <TextField
                  size="small"
                  label={"Dead Cards"}
                  onChange={handleDeadCardsTextChange}
                  value={selectedDeadCards.join("")}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <CardDialog
          open={open}
          onClose={handleClose}
          selectedPlayer={selectedPlayer}
          selectedPlayerCards={selectedPlayerCards}
          selectedBoardCards={selectedBoardCards}
          selectedDeadCards={selectedDeadCards}
          handleCardClick={handleCardClick}
        />
        <Grid item xs={12} marginLeft={50} marginRight={50}>
          <Button variant="contained" onClick={handlePost}>
            Evaluate
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default Poker;
