import { Link } from "react-router-dom";
import logo from "./logo.png";
export default function NavigationBar() {
  return (
    <>
      <section id="navigationBar">
        <div id="upperNavigationBar">
          <div id="logo">
            <img src={logo} alt="logoImage" />
          </div>
          <div id="searchBar">
            <input
              id="searchInput"
              type="text"
              placeholder="        Search Product"
            />
            <span id="selectMenu">
              <select name="cars" id="cars">
                <option value="blank">All Categories</option>
                <option value="saab">Clothes</option>
                <option value="opel">Accesorries</option>
                <option value="audi">Groceries</option>
              </select>
            </span>
            <span id="searchButtonSpan">
              <div id="searchButtonDiv">
                <button id="searchButton">Search</button>
              </div>
            </span>
          </div>
          <div id="loginDiv">
            <Link to="/login">
              <h4>Log In</h4>
            </Link>
            <Link to="/signup">
              <h4>Sign Up</h4>
            </Link>
          </div>
          <div id="cartDiv">
            <Link to="/cart">
              <i class="fa-solid fa-cart-shopping"></i>
            </Link>
            <Link to="/cart">
              <h4>Your Cart</h4>
            </Link>
          </div>
        </div>
        <div id="lowerNavigationBar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/features">Features</Link>
            </li>
            <li>
              <Link to="/collections">Collections</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
