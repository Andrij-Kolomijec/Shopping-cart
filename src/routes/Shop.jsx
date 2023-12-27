import classes from "./Shop.module.css";
import { useLoaderData } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import FilterItems from "../components/FilterItems";
import ItemDetails from "../components/ItemDetails";
import StarsRating from "../components/StarsRating";
import AddToCartButton from "../components/AddToCartButton";

function ShowItems({ items, onItemClick }) {
  return (
    <div className={classes.items}>
      {items.map((item) => (
        <div className={classes.item} key={item.id}>
          <div className={classes.picture}>
            <img
              draggable={false}
              title="Show details"
              id={item.id}
              src={item.image}
              alt={item.title}
              onClick={onItemClick}
            />
          </div>
          <div className={classes.info}>
            <h4>{item.title}</h4>
            <p>{item.price} €</p>
            <StarsRating rating={item.rating} />
          </div>
          <AddToCartButton />
        </div>
      ))}
    </div>
  );
}

ShowItems.propTypes = {
  items: PropTypes.array,
  onItemClick: PropTypes.func,
};

function Shop() {
  const allItems = useLoaderData();
  const [items, setItems] = useState(allItems);
  const [category, setCategory] = useState("all");
  const [sortOption, setSortOption] = useState("default");
  const [showModal, setShowModal] = useState(false);

  const openedItemID = useRef(null);

  function handleFilter(e) {
    setCategory(e.target.value);
  }

  function handleSort(e) {
    setSortOption(e.target.value);
  }

  function handleOpenModal(e) {
    openedItemID.current = e.target.id;
    setShowModal(true);
  }

  function handleCloseModal() {
    openedItemID.current = null;
    setShowModal(false);
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
      <ItemDetails
        show={showModal}
        onClose={handleCloseModal}
        item={items.find((item) => item.id === +openedItemID.current)}
      />
      <FilterItems onFilter={handleFilter} onSort={handleSort} />
      <ShowItems items={items} onItemClick={handleOpenModal} />
    </>
  );
}

export default Shop;
