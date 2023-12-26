import classes from "./Shop.module.css";
import { useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import FilterItems from "../components/FilterItems";

function ShowItems({ items }) {
  console.log(items);
  return (
    <div className={classes.items}>
      {items.map((item) => (
        <div className={classes.item} key={item.id}>
          <div className={classes.picture}>
            <img title={item.description} src={item.image} alt={item.title} />
          </div>
          <div className={classes.info}>
            <h4>{item.title}</h4>
            <p>{item.price} €</p>
            <div
              className={classes.stars}
              style={{
                "--rating": item.rating.rate,
              }}
            >
              <p>{item.rating.count}</p>
            </div>
          </div>

          <button className={classes.add}>
            <img src="cart.svg" alt="Cart" />
            <p>ADD TO CART</p>
          </button>
        </div>
      ))}
    </div>
  );
}

ShowItems.propTypes = {
  items: PropTypes.array,
};

function Shop() {
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

    // if (sortOption !== "default") {
    //   updatedItems = [...updatedItems].sort((a, b) => {
    //     switch (sortOption) {
    //       case "rating":
    //         return b.rating.rate - a.rating.rate;
    //       case "priceLH":
    //         return a.price - b.price;
    //       case "priceHL":
    //         return b.price - a.price;
    //       default:
    //         return a.id - b.id;
    //     }
    //   });
    // }

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
      <FilterItems onFilter={handleFilter} onSort={handleSort} />
      <ShowItems items={items} />
    </>
  );
}

export default Shop;
