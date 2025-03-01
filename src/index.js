import React from "react";
import ReactDOM from "react-dom/client"; // Ensure you're importing from the correct module
import App from "./App";
import "./index.css";
import HeroSection from "./Components/HeroSection";
import Header from "./Components/Header";
import History from "./Components/History";
import Auth from "./Components/Auth";
import AboutUs from "./Components/About";
import { BrowserRouter } from "react-router-dom";

// React 18 createRoot syntax
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
<App />
</BrowserRouter>

);
