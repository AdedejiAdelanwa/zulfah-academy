import { Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import { Application } from "./pages/Application";
import Courses from "./pages/Courses";
import {ApplicationStatus} from './pages/ApplicationStatus';
import { Hire } from "./pages/Hire";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AboutUs />} />
        <Route path="/home" element={<AboutUs />} />
        <Route path="/application" element={<Application />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/hire" element={<Hire />} />
        <Route path="/application-status" element={<ApplicationStatus />} />
      </Routes>
    </div>
  );
}

export default App;
