import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Homepage from "../pages/Index";
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
