import { Box, Paper, Grid, Typography, Divider } from "@mui/material";

function AboutMe(): JSX.Element {
  return (
    <Grid container justifyContent={"center"} alignItems={"center"}>
      <Grid item>
        <Typography variant="h1" color={"#183A37"}>
          About
        </Typography>
        <Divider>This is a divider between the title and the content</Divider>
        <Typography variant="h2" color={"#E01A4F"}>
          Born in Virginia.
        </Typography>
        <Typography variant="h3" color={"#E01A4F"}>
          Raised in West Virginia.
        </Typography>
        <Typography variant="h4" color={"#E01A4F"}>
          Those are different states.
        </Typography>
        <Typography variant="h5" color={"#E01A4F"}>
          One is to the west of the other.
        </Typography>
        <Typography variant="h6" color={"#E01A4F"}>
          I like to write software.
        </Typography>
        <Typography variant="inherit" color={"#E01A4F"}>
          I like to go on long runs.
        </Typography>
        <Typography variant="subtitle1" color={"#E01A4F"}>
          I like to go on short walks.
        </Typography>
        <Typography variant="subtitle2" color={"#E01A4F"}>
          I like to go on medium bike rides.
        </Typography>
        <Typography variant="body1" color={"#E01A4F"}>
          I like to go on short and long car rides.
        </Typography>
        <Typography variant="body2" color={"#E01A4F"}>
          I don't like writing about myself.
        </Typography>
      </Grid>
      <Grid item>
        {/* <Typography variant="h1" color={"#D68840"}>
          E
        </Typography>
        <Typography variant="h2" color={"#D68840"}>
          F P
        </Typography>
        <Typography variant="h3" color={"#D68840"}>
          T O Z
        </Typography>
        <Typography variant="h4" color={"#D68840"}>
          L P E D
        </Typography>
        <Typography variant="h5" color={"#D68840"}>
          P E C F D
        </Typography>
        <Typography variant="h6" color={"#D68840"}>
          E D F C Z P
        </Typography>
        <Typography variant="inherit" color={"#D68840"}>
          F E L O P Z D
        </Typography>
        <Typography variant="subtitle1" color={"#D68840"}>
          D E F P O T E C
        </Typography>
        <Typography variant="subtitle2" color={"#D68840"}>
          L E F O D P C T
        </Typography>
        <Typography variant="body1" color={"#D68840"}>
          F D P L T C E O
        </Typography>
        <Typography variant="body2" color={"#D68840"}>
          P E Z O L C F T D
        </Typography> */}
      </Grid>
    </Grid>
  );
}

export default AboutMe;
