import { Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import { Application } from "./pages/Application";
import Courses from "./pages/Courses";
import { Hire } from "./pages/Hire";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/application" element={<Application />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/hire" element={<Hire />} />
      </Routes>
    </div>
  );
}

export default App;
