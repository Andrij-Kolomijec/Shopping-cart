import classes from "./Shop.module.css";
import { useLoaderData, Outlet, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import FilterItems from "../components/FilterItems";
import StarsRating from "../components/StarsRating";
import AddToCartButton from "../components/AddToCartButton";

function ShowItems({ items, onClick }) {
  return (
    <div className={classes.items}>
      {items.map((item) => (
        <div className={classes.item} key={item.id}>
          <div className={classes.picture}>
            <Link to={item.id.toString()}>
              <img
                draggable={false}
                title="Show details"
                id={item.id}
                src={item.image}
                alt={item.title}
              />
            </Link>
          </div>
          <div className={classes.info}>
            <h4>{item.title}</h4>
            <p>{item.price} €</p>
            <StarsRating rating={item.rating} />
          </div>
          <AddToCartButton onClick={() => onClick(item)} />
        </div>
      ))}
    </div>
  );
}

ShowItems.propTypes = {
  items: PropTypes.array,
  onClick: PropTypes.func,
};

function Shop({ onClick }) {
  const allItems = useLoaderData();
  const [items, setItems] = useState(allItems);
  const [category, setCategory] = useState("all");
  const [sortOption, setSortOption] = useState("default");

  function handleFilter(e) {
    setCategory(e.target.value);
  }

  function handleSort(e) {
    setSortOption(e.target.value);
  }

  useEffect(() => {
    let updatedItems =
      category === "all"
        ? allItems
        : allItems.filter((item) => item.category === category);

    updatedItems =
      sortOption === "default"
        ? [...updatedItems].sort((a, b) => a.id - b.id)
        : sortOption === "rating"
        ? [...updatedItems].sort((a, b) => b.rating.rate - a.rating.rate)
        : sortOption === "priceLH"
        ? [...updatedItems].sort((a, b) => a.price - b.price)
        : [...updatedItems].sort((a, b) => b.price - a.price);

    setItems(updatedItems);
  }, [allItems, category, sortOption]);

  return (
    <>
      <Outlet />
      <FilterItems onFilter={handleFilter} onSort={handleSort} />
      <ShowItems items={items} onClick={onClick} />
    </>
  );
}

Shop.propTypes = {
  onClick: PropTypes.func,
};

export default Shop;
