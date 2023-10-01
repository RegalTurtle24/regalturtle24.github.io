// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Alert from "./components/Alert";
import Home from "./pages/Home";
import MagicStats from "./pages/MagicStats";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/mtg-stats",
    element: <MagicStats />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);
