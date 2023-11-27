import ReactDOM from "react-dom/client";
import { RouterProvider, createHashRouter } from "react-router-dom";
import Home from "./pages/Home";
import MagicStats from "./pages/MagicStats";

import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import RightToRepair from "./pages/RightToRepair";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCn0dZM-mwXCiOw_lGYJV7pFBKjuTX5mDg",
  authDomain: "regalturtlewebsite.firebaseapp.com",
  projectId: "regalturtlewebsite",
  storageBucket: "regalturtlewebsite.appspot.com",
  messagingSenderId: "780382182670",
  appId: "1:780382182670:web:2e8cf7e98bf83dc67f8b5f",
  measurementId: "G-D8P2NLCWNJ",
};

initializeApp(firebaseConfig);

const db = getFirestore();
const decks_collection = collection(db, "decks");
const decks_snapshot = await getDocs(decks_collection);
const games_collection = collection(db, "games");
const games_snapshot = await getDocs(games_collection);

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "mtg-stats",
    element: (
      <MagicStats
        decks_snapshot={decks_snapshot}
        decks_collection={decks_collection}
        games_snapshot={games_snapshot}
        games_collection={games_collection}
      />
    ),
  },
  {
    path: "rtr",
    element: <RightToRepair></RightToRepair>,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);
