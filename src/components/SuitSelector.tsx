import React from "react";
import Grid from "@mui/material/Grid";
import Card from "./Card";
import CardImage from "./CardImage";
type SuitRowProps = {
  suit: string;
  selectedPlayerCards: string[];
  handleCardClick: (cardId: string, type: string) => void;
  selectedPlayer: number;
  selectedBoardCards: string[];
  selectedDeadCards: string[];
};
export default function SuitRow({
  suit,
  selectedPlayerCards,
  handleCardClick,
  selectedPlayer,
  selectedBoardCards,
  selectedDeadCards,
}: SuitRowProps) {
  console.log("selectedPlayer", selectedPlayer);
  const cards = [
    "A",
    "K",
    "Q",
    "J",
    "T",
    "9",
    "8",
    "7",
    "6",
    "5",
    "4",
    "3",
    "2",
  ]; // Update as per your suit names

  return (
    <Grid container spacing={1}>
      {cards.map((card, index) => {
        const cardId = `${card}${suit.toLowerCase()}`;
        let selectedChoice: boolean;
        if (selectedPlayer === 11) {
          selectedChoice = selectedBoardCards.includes(cardId);
        } else if (selectedPlayer === 12) {
          selectedChoice = selectedDeadCards.includes(cardId);
        } else {
          selectedChoice = selectedPlayerCards.includes(cardId);
        }

        return (
          <Grid item key={index}>
            <CardImage
              myCard={new Card(`${card}${suit}`)}
              height="75px"
              onClick={() => handleCardClick(cardId, "card")}
              selected={selectedChoice}
            />
          </Grid>
        );
      })}
    </Grid>
  );
}
