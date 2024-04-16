import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Beranda</Link>
        </li>
        <li>
          <Link to="/about">Tentang</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
