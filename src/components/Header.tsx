import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import CasinoIcon from "@mui/icons-material/Casino";
import { Link as RouterLink } from "react-router-dom";

const pages = ["About Me", "Projects", "Resume", "Contact"];

function Header() {
  return (
    <AppBar position="sticky" style={{ background: "#05445e" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <CasinoIcon
            sx={{ fontSize: 60, display: { xs: "none", md: "flex" }, mr: 1 }}
            to="/coreyfitzpatrick"
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/coreyfitzpatrick"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Corey Fitzpatrick
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            {pages.map((page) => (
              <MenuItem key={page}>
                <Typography textAlign="center">{page}</Typography>
              </MenuItem>
            ))}
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Corey Fitzpatrick
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              component={RouterLink}
              to="/aboutme"
              sx={{ my: 2, color: "white", display: "block" }}
            >
              About Me
            </Button>

            <Button
              component={RouterLink}
              to="/projects"
              sx={{ my: 2, color: "white", display: "block" }}
            >
              projects
            </Button>

            {/* <Button
              component={RouterLink}
              to="/resume"
              sx={{ my: 2, color: "white", display: "block" }}
            >
              resume
            </Button> */}

            <Button
              component={RouterLink}
              to="/poker"
              sx={{ my: 2, color: "white", display: "block" }}
            >
              poker
            </Button>
            <Button
              component={RouterLink}
              to="/roulette"
              sx={{ my: 2, color: "white", display: "block" }}
            >
              roulette
            </Button>
            {/* <Button
              component={RouterLink}
              to="/randomwalk"
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Random Walk
            </Button> */}
          </Box>

          <Box sx={{ flexGrow: 0 }}></Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
