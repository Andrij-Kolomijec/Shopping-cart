import { useDispatch } from "react-redux";
import classes from "./CartItem.module.css";
import { addItem, removeAllItems, removeItem } from "../store/cartSlice";
import { AddProps } from "./AddToCartButton";

export default function CartItem({ item }: AddProps) {
  const dispatch = useDispatch();

  function handleAddItemToCart() {
    dispatch(addItem(item));
  }

  function handleSubtractItemFromCart() {
    if (item.quantity! > 1) {
      dispatch(removeItem(item.id));
    }
  }

  function handleRemoveItemFromCart() {
    dispatch(removeAllItems(item));
  }
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
        <p>{item.price} €</p>
        <div className={classes.counter}>
          <img
            className={item.quantity! <= 1 ? classes.min : ""}
            onClick={handleSubtractItemFromCart}
            src="minus.svg"
            alt=""
          />
          <div>{item.quantity}</div>
          <img onClick={handleAddItemToCart} src="plus.svg" alt="" />
        </div>
      </div>
      <p className={classes.price}>{item.price * item.quantity!} €</p>
      <img
        className={classes.empty}
        title="Remove from Cart"
        onClick={handleRemoveItemFromCart}
        src="cart-remove.svg"
        alt="Empty cart"
      />
    </div>
  );
}
