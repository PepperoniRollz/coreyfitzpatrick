import { Box, Grid } from "@mui/material";
import ProjectCard from "../ProjectCard";

function Projects(): JSX.Element {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Box justifyContent={"center"}>
        <ProjectCard />
        <ProjectCard />
      </Box>
    </Grid>
  );
}

export default Projects;
