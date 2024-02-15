import Grid from "@mui/material/Grid";
import SuitSelector from "./SuitSelector";

type CardsDisplayProps = {
  selectedPlayer: number;
  selectedPlayerCards: string[];
  handleCardClick: (cardId: string, type: string) => void;
  selectedBoardCards: string[];
  selectedDeadCards: string[];
};
const CardsDisplay = ({
  selectedPlayer,
  selectedPlayerCards,
  handleCardClick,
  selectedBoardCards,
  selectedDeadCards,
}: CardsDisplayProps): JSX.Element => {
  const suits: string[] = ["C", "D", "H", "S"]; // Update as per your suit names

  console.log(selectedPlayerCards);

  return (
    <Grid container spacing={2}>
      {suits.map((suit) => (
        <Grid item xs={12} key={suit}>
          <SuitSelector
            suit={suit}
            handleCardClick={handleCardClick}
            selectedPlayerCards={selectedPlayerCards}
            selectedPlayer={selectedPlayer}
            selectedBoardCards={selectedBoardCards}
            selectedDeadCards={selectedDeadCards}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default CardsDisplay;
