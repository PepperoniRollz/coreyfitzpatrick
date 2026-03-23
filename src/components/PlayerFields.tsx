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
          variant="outlined"
          size="small"
          color="primary"
          sx={{ minWidth: 44, minHeight: 44 }}
        >
          Cards
        </Button>
      </Grid>
      <Grid item xs>
        <TextField
          size="small"
          label={`Player ${index + 1}`}
          onChange={onTextChange}
          value={textValue}
          onFocus={onFocus}
          fullWidth
          placeholder="e.g. AcKh"
        />
      </Grid>
      <Grid item xs="auto">
        <Typography sx={{ minWidth: 80, fontWeight: equity > 0 ? "bold" : "normal" }}>
          {equity > 0 ? `${(equity * 100).toFixed(4)}%` : "--"}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default PlayerFields;
