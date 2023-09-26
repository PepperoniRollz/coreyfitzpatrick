import { createBrowserRouter } from "react-router-dom";
import Contact from "../../components/routes/Contact";
import AboutMe from "./AboutMe";
import Projects from "../../components/routes/Projects";
import TabbedResume from "../TabbedResume";
import Layout from "../Layout";
import Home from "./Home";
import Poker from "./Poker";

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
        element: <TabbedResume />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "poker",
        element: <Poker />,
      },
    ],
  },
]);

export default router;
