import classes from "./Shop.module.css";
import { useLoaderData } from "react-router-dom";

function Shop() {
  const items = useLoaderData();
  console.log(items);
  return (
    <div className={classes.items}>
      {items.map((item) => (
        <div className={classes.item} key={item.id}>
          <div className={classes.picture}>
            <img src={item.image} alt={item.title} />
          </div>
          <div className={classes.info}>
            <h4>{item.title}</h4>
            <p>Price: {item.price} €</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Shop;
