import classes from "./FilterItems.module.css";
import PropTypes from "prop-types";

function changeFilterWidth(e) {
  return e.target.value === "all"
    ? (e.target.style.width = "60px")
    : e.target.value === "electronics"
    ? (e.target.style.width = "122px")
    : e.target.value === "jewelery"
    ? (e.target.style.width = "105px")
    : e.target.value === "men's clothing"
    ? (e.target.style.width = "150px")
    : e.target.value === "women's clothing"
    ? (e.target.style.width = "176px")
    : e.target.value === "default" || e.target.value === "rating"
    ? (e.target.style.width = "90px")
    : (e.target.style.width = "190px");
}

function FilterItems({ onFilter, onSort }) {
  return (
    <div className={classes.filterOrder}>
      <div className={classes.filter}>
        <span>
          Home
          <img src="chevron-right.svg" alt="" />
        </span>
        <span>
          Shop
          <img src="chevron-right.svg" alt="" />
        </span>
        <span className={classes.select}>
          <select
            className={classes.dynamicSelect}
            name="products"
            onChange={(e) => {
              changeFilterWidth(e);
              onFilter(e);
            }}
          >
            <option value="all">All</option>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelery</option>
            <option value="men's clothing">Men&lsquo;s Clothing</option>
            <option value="women's clothing">Women&lsquo;s Clothing</option>
          </select>
        </span>
      </div>
      <div className={classes.order}>
        <select
          className={classes.dynamicOrder}
          name="sorts"
          onChange={(e) => {
            changeFilterWidth(e);
            onSort(e);
          }}
        >
          <option value="default">Default</option>
          <option value="priceLH">Price (Low to High)</option>
          <option value="priceHL">Price (High to Low)</option>
          <option value="rating">Rating</option>
        </select>
      </div>
    </div>
  );
}

FilterItems.propTypes = {
  onFilter: PropTypes.func,
  onSort: PropTypes.func,
};

export default FilterItems;
