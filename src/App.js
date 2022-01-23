import { Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import { Application } from "./pages/Application";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/application" element={<Application />} />
        <Route path="/About" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;
