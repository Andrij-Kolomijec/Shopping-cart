import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className={classes.header}>
      <h1>Welcome!</h1>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? classes.active : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="shop"
              className={({ isActive }) => (isActive ? classes.active : "")}
            >
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink
              to="about"
              className={({ isActive }) => (isActive ? classes.active : "")}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="cart"
              className={({ isActive }) => (isActive ? classes.active : "")}
            >
              Cart
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
