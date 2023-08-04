import Paper from "@mui/material/Paper";
import image from "../../images/pexels-ryan-17153468.jpg";
import { Box, Grid, Typography } from "@mui/material";

function Home(): JSX.Element {
  return (
    <Box
      sx={{
        flexGrow: 1,
        backgroundColor: "primary.dark",
      }}
    >
      <Paper
        sx={{
          backgroundImage: `url(${image})`,
          height: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Grid
          container
          alignItems={"center"}
          justifyContent={"center"}
          sx={{ height: "100%" }}
        >
          <Grid item>
            <Typography variant="h1" color={"#e1ad01"} fontSize={100}>
              corey fitzpatrick.
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" color={"#D68840"} fontSize={33}>
              I'm the dude playing the dude disguised as a programmer.
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}

export default Home;
