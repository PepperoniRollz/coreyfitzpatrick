import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import CasinoIcon from "@mui/icons-material/Casino";
import { Link as RouterLink, createBrowserRouter } from "react-router-dom";
import Home from "./routes/Home";
import Resume from "./routes/Resume";
import Poker from "./routes/Poker";
import Contact from "./routes/Contact";
import Projects from "./routes/Projects";

const pages = ["About Me", "Projects", "Poker", "Resume", "Contact"];

const router = createBrowserRouter([
  {
    path: "coreyfitzpatrick",
    element: <Home />,
  },
  {
    path: "resume",
    element: <Resume />,
  },
  {
    path: "poker",
    element: <Poker />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "projects",
    element: <Projects />,
  },
]);

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="sticky" style={{ background: "#087E8B" }}>
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
              <MenuItem key={page} onClick={handleCloseNavMenu}>
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
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              About Me
            </Button>

            <Button
              component={RouterLink}
              to="/projects"
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              projects
            </Button>

            <Button
              component={RouterLink}
              to="/resume"
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              resume
            </Button>
            <Button
              component={RouterLink}
              to="/contact"
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              contact
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}></Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
