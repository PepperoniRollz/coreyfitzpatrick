import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { IconButton } from "@mui/material";

const pages = ["Home", "Projects", "Poker", "Resume"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Footer() {
  return (
    <AppBar
      position="fixed"
      style={{
        background: "#087E8B",
      }}
      color="primary"
      sx={{ top: "auto", bottom: 0 }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "center" }}>
          <IconButton
            href="https://www.linkedin.com/in/corey-fitzpatrick-44b53876/"
            target="_blank"
          >
            <LinkedInIcon
              sx={{ fontSize: 50, display: { xs: "none", md: "flex" }, mr: 1 }}
            />
          </IconButton>
          <IconButton
            href="http://www.github.com/pepperonirollz"
            target="_blank"
          >
            <GitHubIcon
              sx={{ fontSize: 50, display: { xs: "none", md: "flex" }, mr: 1 }}
            />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Footer;
