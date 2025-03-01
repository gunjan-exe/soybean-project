import React from "react";
import ReactDOM from "react-dom/client"; // Ensure you're importing from the correct module
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

// React 18 createRoot syntax
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
<App />
</BrowserRouter>

);
