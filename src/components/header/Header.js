import { LOGO_URL } from "../../utils/constants";
import "./header.css";
import { Link } from "react-router-dom";
import { NAV_ITEM_LIST } from "../../utils/constants";

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="App Logo" />
      </div>
      {/* <div className="search-container">
        <input type="text" placeholder="Search restaurants or dishes" className="search-bar" />
      </div> */}
      <nav className="nav-items">
        <ul>
          {NAV_ITEM_LIST?.map((item, index) => (
            <li key={item?.id || index}>
              <Link to={item?.navTo} className="link-style">{item?.title}</Link>
            </li>
          ))}
          {/* <button className="login">Login</button> */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
