import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

const pages = ["Home", "Projects", "Poker", "Resume"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Footer() {
  return (
    <AppBar position="fixed" color="primary" sx={{ top: "auto", bottom: 0 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "center" }}>
          <LinkedInIcon
            sx={{ fontSize: 50, display: { xs: "none", md: "flex" }, mr: 1 }}
          />
          <InstagramIcon
            sx={{ fontSize: 50, display: { xs: "none", md: "flex" }, mr: 1 }}
          />
          <GitHubIcon
            sx={{ fontSize: 50, display: { xs: "none", md: "flex" }, mr: 1 }}
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Footer;
