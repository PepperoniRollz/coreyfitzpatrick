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
    <Grid
      container
      spacing={1}
      alignItems="center"
      sx={{ mb: { xs: 1, md: 0 } }}
    >
      <Grid item xs="auto">
        <Button
          onClick={() => handleClickOpen(index)}
          size="small"
          sx={{ color: "blue", minWidth: 44, minHeight: 44 }}
        >
          Cards
        </Button>
      </Grid>
      <Grid item xs>
        <TextField
          size="small"
          label={`Player ${index}`}
          onChange={onTextChange}
          value={textValue}
          onFocus={onFocus}
          fullWidth
        />
      </Grid>
      <Grid item xs="auto">
        <Typography sx={{ minWidth: 80 }}>{(equity * 100).toFixed(4)}%</Typography>
      </Grid>
    </Grid>
  );
};

export default PlayerFields;
