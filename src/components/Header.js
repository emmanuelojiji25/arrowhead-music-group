import "./Header.scss";
import logo from "../assets/amg-logo.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isPopupActive, setIsPopupActive] = useState(false);

  const handleMobileNav = () => {
    if (!isMobileNavOpen) {
      setIsMobileNavOpen(true);

      setTimeout(() => {
        setIsPopupActive(true);
      }, 50);
    } else {
      setIsPopupActive(false);

      setTimeout(() => {
        setIsMobileNavOpen(false);
      }, 500);
    }
  };
  return (
    <div className="Header">
      <div className="header-left">
        <img src={logo} className="logo-amg" alt="Arrowhead Music Group Logo" />

        <nav className="desktop-nav">
          <Link to="/">Home</Link>
          <Link to="/roster">Roster</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>

      <p className="mobile-nav-icon" onClick={() => handleMobileNav()}>
        Open
      </p>

      <Link to="/theriseprogram" className="header-right-link bold desktop-nav">
        The Rise Program
      </Link>

      {isMobileNavOpen && (
        <nav
          className={`mobile-nav text-xl ${isPopupActive ? "popup" : ""}`}
          onClick={() => handleMobileNav()}
        >
          <Link to="/">Home</Link>
          <Link to="/roster">Roster</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/theriseprogram" className="header-right-link bold">
            The Rise Program
          </Link>
        </nav>
      )}
    </div>
  );
};

export default Header;
