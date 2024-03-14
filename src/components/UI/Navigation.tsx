import { NavLink } from "react-router-dom";
import classes from "./Navigation.module.css";
import shopping from "/shopping.svg";

export default function Navigation() {
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
              <img src={shopping} alt="Cart" />
              {/* <span className={classes.number}>
                {cartContent.reduce((acc, i) => {
                  return acc + i.count;
                }, 0)}
              </span> */}
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
