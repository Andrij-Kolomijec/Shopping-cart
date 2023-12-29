import classes from "./Header.module.css";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

function Header({ cartContent }) {
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
          <li className={classes.wrapper}>
            <NavLink
              to="cart"
              className={({ isActive }) => (isActive ? classes.active : "")}
            >
              <img src="shopping.svg" alt="Cart" />
              <span className={classes.number}>
                {cartContent.reduce((acc, i) => {
                  return acc + i.count;
                }, 0)}
              </span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

Header.propTypes = {
  cartContent: PropTypes.array,
};

export default Header;
