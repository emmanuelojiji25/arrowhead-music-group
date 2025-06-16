import "./Header.scss";
import logo from "../assets/amg-logo.svg";

const Header = () => {
  return (
    <div className="Header">
      <div className="header-left">
        <img src={logo} className="logo-amg" alt="Arrowhead Music Group Logo" />

        <nav>
          <a>Home</a>
          <a>Roster</a>
          <a>About</a>
          <a>Contact</a>
        </nav>
      </div>

      <a>The Rise Program</a>
    </div>
  );
};

export default Header;
