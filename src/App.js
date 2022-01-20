import { Routes, Route } from "react-router-dom";
import MainNavigation from "./components/Navigation";
import { Application } from "./pages/Application";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/application" element={<Application />} />
      </Routes>
    </div>
  );
}

export default App;
