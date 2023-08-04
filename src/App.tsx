import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./components/routes/Router";

function App() {
  return (
    <div className="App" background-color="#D68840">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
