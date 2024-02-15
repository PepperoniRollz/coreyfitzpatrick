import { Grid, Button, TextField, Typography } from "@mui/material";

const PlayerFields = ({
  index,
  onTextChange,
  handleClickOpen,
  selectedPlayerCards,
  textValue,
  onFocus,
  equity,
}: {
  index: number;
  onTextChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClickOpen: (index: number) => void;
  selectedPlayerCards: string[];
  textValue: string;
  onFocus: () => void;
  equity: number;
}): JSX.Element => {
  return (
    <Grid container spacing={1} alignItems="center">
      <Grid item>
        <Button
          onClick={() => handleClickOpen(index)}
          size="small"
          sx={{ color: "blue" }}
        >
          Cards
        </Button>
      </Grid>
      <Grid item>
        <TextField
          size="small"
          label={`Player ${index}`}
          onChange={onTextChange}
          value={textValue}
          onFocus={onFocus}
        />
      </Grid>
      <Grid item>
        <Typography>{(equity * 100).toFixed(4)}%</Typography>
      </Grid>
    </Grid>
  );
};

export default PlayerFields;
