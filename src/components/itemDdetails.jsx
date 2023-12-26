import classes from "./itemDetails.module.css";
import PropTypes from "prop-types";

function ItemDetails({ item }) {
  return (
    <dialog className={classes.modal}>
      <div className={classes.item} key={item.id}>
        <h4>{item.title}</h4>
        <div className={classes.picture}>
          <img title={item.description} src={item.image} alt={item.title} />
        </div>
        <div className={classes.info}>
          <p>{item.description}</p>
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
    </dialog>
  );
}

ItemDetails.propTypes = {
  item: PropTypes.object,
};

export default ItemDetails;
