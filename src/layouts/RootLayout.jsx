import { NavLink, Outlet } from "react-router-dom";
import "../styles/style.css";

const Navbar = () => {
  return (
    <>
      <nav className="bg-blue-500 py-3">
        <ul className="flex justify-center space-x-4">
          <li>
            <NavLink
              to="/"
              className="text-white relative p-1 hover:text-gray-200"
            >
              Beranda
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="text-white relative p-1 hover:text-gray-200"
            >
              Tentang
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className="text-white relative p-1 hover:text-gray-200"
            >
              Blog
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
