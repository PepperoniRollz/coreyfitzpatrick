import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import Home from "./Home";

const AboutMe = lazy(() => import("./AboutMe"));
const Contact = lazy(() => import("./Contact"));
const Projects = lazy(() => import("./Projects"));
const Poker = lazy(() => import("./Poker"));
const Roulette = lazy(() => import("./Roulette"));
const Resume = lazy(() => import("./Resume"));
const RandomWalk = lazy(() => import("./RandomWalk"));

const router = createBrowserRouter(
  [
    {
      element: <Layout />,
      children: [
        {
          path: "/",
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
          path: "randomwalk",
          element: <RandomWalk />,
        },
      ],
    },
  ],
  {
    basename: "/coreyfitzpatrick",
  }
);

export default router;
