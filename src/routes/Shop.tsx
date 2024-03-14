import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import classes from "./Shop.module.css";
import fetchStoreItems, { type StoreItem } from "../utils/http";
import Filter from "../components/Filter";
import RatingStars from "../components/RatingStars";
import AddToCartButton from "../components/AddToCartButton";

export default function Shop() {
  const { data, isFetching } = useQuery({
    queryKey: ["storeItems"],
    queryFn: fetchStoreItems,
    staleTime: 1000 * 60 * 5,
    placeholderData: [],
  });

  const [items, setItems] = useState<StoreItem[]>(data || []);
  const [category, setCategory] = useState("all");
  const [sortOption, setSortOption] = useState("default");

  function handleFilter(e: React.ChangeEvent<HTMLSelectElement>) {
    setCategory(e.target.value);
  }

  function handleSort(e: React.ChangeEvent<HTMLSelectElement>) {
    setSortOption(e.target.value);
  }

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    const foundItems = data!.filter(
      (item) =>
        item.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
        item
          .description!.toLowerCase()
          .includes(e.target.value.toLowerCase()) ||
        item.price.toString().includes(e.target.value)
    );
    setItems(foundItems);
  }

  useEffect(() => {
    if (data) {
      let updatedItems =
        category === "all"
          ? data
          : data!.filter((item) => item.category === category);

      updatedItems =
        sortOption === "default"
          ? [...updatedItems].sort((a, b) => +a.id - +b.id)
          : sortOption === "rating"
          ? [...updatedItems].sort((a, b) => b.rating!.rate - a.rating!.rate)
          : sortOption === "priceLH"
          ? [...updatedItems].sort((a, b) => a.price - b.price)
          : [...updatedItems].sort((a, b) => b.price - a.price);

      setItems(updatedItems);
    }
  }, [data, category, sortOption]);

  if (isFetching) {
    return <span className={classes.loader}></span>;
  }

  return (
    <>
      <Outlet />
      <Filter
        onFilter={handleFilter}
        onSort={handleSort}
        onSearch={handleSearch}
      />
      <div className={classes.items}>
        {items!.map((item) => (
          <div className={classes.item} key={item.id}>
            <div className={classes.picture}>
              <Link to={item.id.toString()}>
                <img
                  draggable={false}
                  title="Show details"
                  id={item.id.toString()}
                  src={item.image}
                  alt={item.title}
                />
              </Link>
            </div>
            <div className={classes.info}>
              <h4>{item.title}</h4>
              <p>{item.price} €</p>
              <RatingStars rating={item.rating} />
            </div>
            <AddToCartButton item={item} />
          </div>
        ))}
      </div>
    </>
  );
}
