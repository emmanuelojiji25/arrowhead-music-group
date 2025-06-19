import "./Header.scss";
import logo from "../assets/amg-logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="Header">
      <div className="header-left">
        <img src={logo} className="logo-amg" alt="Arrowhead Music Group Logo" />

        <nav>
          <Link to="/">Home</Link>
          <Link to="/roster">Roster</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>

      <Link to="/theriseprogram" className="header-right-link bold">The Rise Program</Link>
    </div>
  );
};

export default Header;
