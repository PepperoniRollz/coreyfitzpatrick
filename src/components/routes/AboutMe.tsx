import { Box, Paper, Grid, Typography, Divider } from "@mui/material";
import games from "../../images/games.png";
import programming from "../../images/programming.png";

function AboutMe(): JSX.Element {
  return (
    <>
      <Grid container paddingTop={5}>
        <Box sx={{ width: "100%", marginBottom: 2, marginX: { xs: 2, sm: 4, md: 10, lg: 20 } }}>
          <Typography variant="h4" align="left" gutterBottom>
            {"About."}
          </Typography>
          <Divider sx={{ borderColor: "#000000" }} />
        </Box>
        <Grid
          container
          spacing={2}
          sx={{
            marginLeft: { xs: 2, sm: 4, md: 10, lg: 20 },
            marginRight: { xs: 2, sm: 4, md: 10, lg: 20 },
            marginTop: { xs: 4, md: 10 },
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Grid item xs={12} sm={6} md={4}>
            <img
              src={games}
              alt="games"
              style={{ width: "100%", height: "auto" }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h5"
              align={"left"}
              fontFamily={"sans-serif"}
              sx={{ fontSize: { xs: "1.1rem", md: "1.5rem" } }}
            >
              Games, probability, math, puzzles, and statistics have always been
              an interest of mine. What better thing to do than to combine all
              them into a little website?
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          sx={{
            marginLeft: { xs: 2, sm: 4, md: 10, lg: 20 },
            marginRight: { xs: 2, sm: 4, md: 10, lg: 20 },
            marginTop: { xs: 4, md: 10 },
            marginBottom: { xs: 4, md: 10 },
            flexDirection: { xs: "column-reverse", md: "row" },
          }}
          borderRadius={"15px"}
        >
          <Grid item xs={12} md={6}>
            <Typography
              variant="h5"
              align={"left"}
              fontFamily={"sans-serif"}
              sx={{ fontSize: { xs: "1.1rem", md: "1.5rem" } }}
            >
              This website is a work in progress. I am using it as a way to
              combine some personal interests and passion for programming.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <img
              src={programming}
              alt="programming"
              style={{ width: "100%", height: "auto" }}
            />
          </Grid>
        </Grid>
        <Grid container bgcolor={"#023047"} paddingTop={5}>
          <Grid
            item
            sx={{
              marginLeft: { xs: 2, sm: 4, md: 10, lg: 20 },
              marginRight: { xs: 2, sm: 4, md: 10, lg: 20 },
              marginTop: { xs: 4, md: 10 },
              marginBottom: { xs: 8, md: 20 },
            }}
          >
            <Typography variant="h4" color={"white"} sx={{ fontSize: { xs: "1.3rem", md: "2.125rem" } }}>
              "In the beginning the Universe was created. This has made a lot of
              people very angry and been widely regarded as a bad move." <br />
              -Douglas Adams
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default AboutMe;
