import { createBrowserRouter } from "react-router-dom";
import Contact from "../../components/routes/Contact";
import AboutMe from "./AboutMe";
import Projects from "../../components/routes/Projects";
import Layout from "../Layout";
import Home from "./Home";
import Poker from "./Poker";
import Roulette from "./Roulette";
import Resume from "./Resume";
import BitTester from "./BitTester";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/coreyfitzpatrick",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "aboutme",
        element: <AboutMe />,
      },
      {
        path: "resume",
        element: <Resume />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "poker",
        element: <Poker />,
      },
      {
        path: "roulette",
        element: <Roulette />,
      },
      {
        path: "bittester",
        element: <BitTester />,
      },
    ],
  },
]);

export default router;
