import { createBrowserRouter } from "react-router-dom";
import Contact from "../../components/routes/Contact";
import Poker from "../../components/routes/Poker";
import AboutMe from "./AboutMe";
import Projects from "../../components/routes/Projects";
import TabbedResume from "../TabbedResume";
import Layout from "../Layout";
import Home from "./Home";

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
    ],
  },
]);

export default router;
