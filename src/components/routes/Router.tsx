import App from "../../App";
import { createBrowserRouter } from "react-router-dom";
import Contact from "../../components/routes/Contact";
import Poker from "../../components/routes/Poker";
import Resume from "../../components/routes/Resume";
import AboutMe from "../../components/routes/AboutMe";
import Projects from "../../components/routes/Projects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "contact",
        element: <Contact />,
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
      {
        path: "aboutme",
        element: <AboutMe />,
      },
    ],
  },
]);

export default router;
