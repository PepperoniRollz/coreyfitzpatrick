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
    Array.from({ length: 12 }, () => ({ cards: "", equity: 0 }))
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
    newValues[selectedPlayer] = event.target.value;
    setDeadCardsFieldValues(newValues);
  };

  //================================================================================================
  //handlers
  //================================================================================================

  useEffect(() => {
    setPlayerFieldValues((prev) => {
      const newValues = [...prev];
      newValues[selectedPlayer] = {
        cards: selectedPlayerCards.join(""),
        equity: 0,
      };
      return newValues;
    });
  }, [selectedPlayerCards, selectedPlayer]);

  useEffect(() => {
    setBoardFieldValues((prev) => {
      const newValues = [...prev];
      newValues[selectedPlayer] = selectedBoardCards.join("");
      return newValues;
    });
  }, [selectedBoardCards, selectedPlayer]);

  useEffect(() => {
    setDeadCardsFieldValues((prev) => {
      const newValues = [...prev];
      newValues[selectedPlayer] = selectedDeadCards.join("");
      return newValues;
    });
  }, [selectedDeadCards, selectedPlayer]);

  useEffect(() => {
    setPlayerFieldValues((prev) =>
      prev.map((player, index) => ({
        ...player,
        equity: equityEvaluation.equities
          ? equityEvaluation.equities.Equities[index]
          : player.equity,
      }))
    );
  }, [equityEvaluation]);

  const convertToCards = (
    playerCards: string[]
  ): { Players: CardSet[]; Board: CardSet } => {
    const players: CardSet[] = [];
    const boardCards = new CardSet(selectedBoardCards.join(""));
    playerCards.forEach((cards) => {
      if (cards.length === 4) {
        players.push(new CardSet(cards));
      }
    });
    return { Players: players, Board: boardCards };
  };
  const handlePost = () => {
    const { Players, Board } = convertToCards(
      playerFieldValues.map((p) => p.cards)
    );
    fetch("https://ec2-3-85-15-107.compute-1.amazonaws.com:8080/api/equity", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
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
          return prevSelected.filter((id) => id !== cardId);
        } else if (prevSelected.length < 4) {
          return [...prevSelected, cardId];
        } else {
          return [...prevSelected.slice(1), cardId];
        }
      });
    } else if (selectedPlayer === 12) {
      setSelectedDeadCards((prevSelected) => {
        if (prevSelected.includes(cardId)) {
          return prevSelected.filter((id) => id !== cardId);
        } else if (prevSelected.length < 48) {
          return [...prevSelected, cardId];
        } else {
          return [...prevSelected.slice(1), cardId];
        }
      });
    } else {
      setSelectedPlayerCards((prevSelected) => {
        if (prevSelected.includes(cardId)) {
          return prevSelected.filter((id) => id !== cardId);
        } else if (prevSelected.length < 2) {
          return [...prevSelected, cardId];
        } else {
          return [...prevSelected.slice(1), cardId];
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
        minHeight={"100vh"}
        paddingBottom={"2%"}
      >
        <Box sx={{ width: "100%", marginTop: 2, marginX: { xs: 2, sm: 4, md: 10, lg: 20 } }}>
          <Typography variant="h4" align="left" gutterBottom>
            {"Poker."}
          </Typography>
          <Divider sx={{ borderColor: "#000000" }} />
        </Box>
        <Box sx={{ borderColor: "primary.main", width: "100%" }}>
          <Grid item xs={12} sx={{ marginLeft: { xs: 2, sm: 4, md: 10, lg: 20 }, marginRight: { xs: 2, sm: 4, md: 10, lg: 20 } }}>
            <Typography variant="body1" align={"left"}>
              An equity calculator for Texas Holdem. Enter player and board/dead
              cards to evaluate win equity. **Temporarily down to AWS costs**
            </Typography>
          </Grid>
        </Box>
        <Grid
          container
          spacing={2}
          sx={{
            marginX: { xs: 2, sm: 4, md: 10, lg: 20 },
            mt: 2,
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          {/* ================================ Player Fields ================================ */}

          <Grid item xs={12} md={8}>
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
          <Grid item xs={12} md={4}>
            <Grid container spacing={1} alignItems="center" sx={{ mb: 1 }}>
              {/* ================================ Board Fields ================================ */}

              <Grid item xs="auto">
                <Button
                  onClick={() => handleClickOpen(11)}
                  size="small"
                  sx={{ color: "blue", minWidth: 44, minHeight: 44 }}
                >
                  Cards
                </Button>
              </Grid>
              <Grid item xs>
                <TextField
                  size="small"
                  label={"Board"}
                  onChange={handleBoardTextChange}
                  value={selectedBoardCards.join("")}
                  fullWidth
                />
              </Grid>
            </Grid>
            {/* ================================ dead cards ================================ */}
            <Grid container spacing={1} alignItems="center">
              <Grid item xs="auto">
                <Button
                  onClick={() => handleClickOpen(12)}
                  size="small"
                  sx={{ color: "blue", minWidth: 44, minHeight: 44 }}
                >
                  Cards
                </Button>
              </Grid>

              <Grid item xs>
                <TextField
                  size="small"
                  label={"Dead Cards"}
                  onChange={handleDeadCardsTextChange}
                  value={selectedDeadCards.join("")}
                  fullWidth
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
        <Grid item xs={12} sx={{ marginLeft: { xs: 2, sm: 4, md: 10, lg: 20 }, marginRight: { xs: 2, sm: 4, md: 10, lg: 20 } }}>
          <Button variant="contained" onClick={handlePost} sx={{ minHeight: 44 }}>
            Evaluate
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default Poker;
