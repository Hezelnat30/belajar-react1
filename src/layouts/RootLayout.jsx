import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="bg-blue-500 py-3">
        <ul className="flex justify-center space-x-4">
          <li>
            <Link to="/" className="text-white hover:text-gray-200">
              Beranda
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:text-gray-200">
              Tentang
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
