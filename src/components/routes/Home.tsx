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
          sx={{ height: "100%", px: { xs: 2, md: 0 } }}
        >
          <Grid item>
            <Typography
              variant="h1"
              color={"#e1ad01"}
              sx={{
                fontSize: { xs: 40, sm: 60, md: 100 },
                wordBreak: "break-word",
              }}
            >
              corey fitzpatrick.
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="subtitle1"
              color={"#D68840"}
              sx={{ fontSize: { xs: 16, sm: 22, md: 33 } }}
            >
              I'm the dude playing the dude disguised as a programmer.
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}

export default Home;
