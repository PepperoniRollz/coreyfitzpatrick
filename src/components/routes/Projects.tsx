import { Box, Divider, Grid, Typography } from "@mui/material";
import ProjectCard from "../ProjectCard";
import roulette from "../../images/roulette.png";
import poker from "../../images/poker.png";
import twoplustwo from "../../images/twoplustwo.png";

function Projects(): JSX.Element {
  return (
    <>
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          bgcolor: "#189ab4",
          paddingTop: "2%",
          paddingBottom: "2%",
          overflow: "auto",
        }}
      >
        <Box
          sx={{
            width: "80%",
            margin: "0 auto",
            padding: "0 50px",
          }}
        >
          <Grid
            container
            spacing={5}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12}>
              <Typography variant="h4" align={"left"}>
                Projects.
              </Typography>
            </Grid>
            <Box sx={{ width: "100%" }}>
              <Divider sx={{ borderColor: "#000000" }} />
            </Box>
            <Box sx={{ borderColor: "primary.main" }}></Box>
            <Grid item xs={12} sm={6} md={4}>
              <ProjectCard
                title={"Poker Equity Calculator"}
                description={`a simple poker equity calcuator that takes a player's cards, along with board cards, and evaluates the win equity that a player's hand has against the others.  
          The calcuations are computed using my version of the twoplustwo holdem hand evaluator on a custom server hosted on an AWS EC2 instance.`}
                url={"/Poker"}
                img={poker}
              ></ProjectCard>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <ProjectCard
                title={"Martingale Roulette Evaluation"}
                description={`A calcuator that evaluates the common casino game of roulette.  The user can input many values and evaluate their chances of reaching a certain goal threshold after 
              a number of spins, or see their chances of winning after a set number of spins.`}
                url={"/Roulette"}
                img={roulette}
              ></ProjectCard>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <ProjectCard
                title={"TwoPlusTwo Holdem Hand Evaluator"}
                description={`This is a reincarnation of the famous TwoPlusTwo Poker hand evaluator.  Originally just an exercise in porting a c program into golang.  I ended up using this library to calculate hand equities for the poker equity calculator used on this site.
        The twoplustwo hand evaluator is simple in usage, it takes in a 5-7 card poker hand, and returns a value which corresponds to certain hand classes and a ranking within those classes.  This method is one of the fastest methods of hand evaluation,
        but what it gains in speed, it lacks in space complexity, as the array is quite large (roughly 500MB).`}
                url="https://github.com/PepperoniRollz/twoplustwo-go"
                img={twoplustwo}
              ></ProjectCard>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default Projects;
