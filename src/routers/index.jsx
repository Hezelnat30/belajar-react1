import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "../pages/index";
import Coba from "../pages/coba";

export const RouterComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/coba" element={<Coba />} />
      </Routes>
    </Router>
  );
};
