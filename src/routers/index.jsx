import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "../pages/index";
import About from "../pages/about";

export const RouterComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};
