import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Entrada from "./Entrada";
import Pokedex from "./Pokedex";

const rotas = createBrowserRouter([
  {
    path: "/",
    element: <Entrada />,
  },
  {
    path: "/pokedex",
    element: <Pokedex />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <RouterProvider router={rotas}></RouterProvider>
  </div>
);
