import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className={classes.header}>
      <h1>Random Stuff</h1>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? classes.active : "")}
            >
              <p>Home</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="shop"
              className={({ isActive }) => (isActive ? classes.active : "")}
            >
              <p>Shop</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="about"
              className={({ isActive }) => (isActive ? classes.active : "")}
            >
              <p>About</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="cart"
              className={({ isActive }) => (isActive ? classes.active : "")}
            >
              <img src="shopping.svg" alt="Cart" />
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
