import React from "react";
import ReactDOM from "react-dom/client";
import MainPage from "./pages/mainPage";
import Navigation from "../components/Navigation";

import "./index.css";
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <MainPage />
        <Navigation />
    </React.StrictMode>,
);
