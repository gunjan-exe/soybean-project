import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Auth from "./Components/Auth";
import ScanHere from "./Components/ScanHere";

function App() {
  return (
      <Routes>
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/" element={<Auth />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="/scan" element={<ScanHere />} />
      </Routes>
    
  );
}

export default App;
