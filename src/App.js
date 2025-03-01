import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Auth from "./Components/Auth";
import ScanHere from "./pages/ScanHere";
import History from "./pages/History";
import Login from "./pages/Login";
import Landing from "./pages/Landing";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/scan" element={<ScanHere />} />
      <Route path="/history" element={<History />} />
    </Routes>
  );
}

export default App;
