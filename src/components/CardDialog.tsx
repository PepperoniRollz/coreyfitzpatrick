import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import CardSelector from "./CardSelector";

type CardDialogProps = {
  open: boolean;
  onClose: () => void;
  selectedPlayer: number;
  selectedPlayerCards: string[];
  selectedBoardCards: string[];
  selectedDeadCards: string[];
  handleCardClick: (cardId: string, type: string) => void;
  title?: string;
};

const CardDialog = ({
  open,
  onClose,
  selectedPlayer,
  selectedPlayerCards,
  handleCardClick,
  selectedBoardCards,
  selectedDeadCards,
  title = "Select Options",
}: CardDialogProps) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="lg">
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <CardSelector
          selectedPlayer={selectedPlayer}
          selectedPlayerCards={selectedPlayerCards}
          selectedBoardCards={selectedBoardCards}
          selectedDeadCards={selectedDeadCards}
          handleCardClick={handleCardClick}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={onClose}>Ok</Button>
      </DialogActions>
    </Dialog>
  );
};

export default CardDialog;
