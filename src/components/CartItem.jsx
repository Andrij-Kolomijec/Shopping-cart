import classes from "./CartItem.module.css";
import PropTypes from "prop-types";

function CartItem({ item, onClickAdd, onClickSubtract, onClickRemove }) {
  return (
    <div className={classes.item}>
      <img
        draggable={false}
        src={item.image}
        alt={item.title}
        title={item.description}
      />
      <div className={classes.wrapper}>
        <h4>{item.title}</h4>
        <div className={classes.counter}>
          <img
            className={item.count <= 1 ? classes.min : ""}
            onClick={() => onClickSubtract(item)}
            src="minus.svg"
            alt=""
          />
          <div>{item.count}</div>
          <img onClick={() => onClickAdd(item)} src="plus.svg" alt="" />
        </div>
      </div>
      <p className={classes.price}>{(item.price * item.count).toFixed(2)} €</p>
      <img
        className={classes.empty}
        title="Remove from Cart"
        onClick={() => onClickRemove(item)}
        src="cart-remove.svg"
        alt="Empty cart"
      />
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.object,
  onClickAdd: PropTypes.func,
  onClickSubtract: PropTypes.func,
  onClickRemove: PropTypes.func,
};

export default CartItem;
