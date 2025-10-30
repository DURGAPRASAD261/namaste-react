import { LOGO_URL } from "../../utils/constants";
import './header.css';

const Header = () => {

  return(
     <header className="header">
    <div className="logo-container">
      <img className="logo" src={LOGO_URL} alt="App Logo" />
    </div>
    {/* <div className="search-container">
      <input type="text" placeholder="Search restaurants or dishes" className="search-bar" />
    </div> */}
    <nav className="nav-items">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li><span className="cart-icon">🛒</span> Cart</li>
        <button className="login">Login</button>
      </ul>
    </nav>
  </header>
  )
};

export default Header;