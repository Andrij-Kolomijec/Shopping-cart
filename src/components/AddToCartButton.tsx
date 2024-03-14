import { useDispatch } from "react-redux";
import classes from "./AddToCartButton.module.css";
import cart from "/cart.svg";
import { addItem } from "../store/cartSlice";
import { type StoreItem } from "../utils/http";

export type AddProps = {
  item: StoreItem;
};

export default function AddToCartButton({ item }: AddProps) {
  const dispatch = useDispatch();
  function handleAddItemToCart() {
    dispatch(addItem(item));
  }

  return (
    <button onClick={handleAddItemToCart} className={classes.add}>
      <img src={cart} alt="Cart" />
      <p>ADD TO CART</p>
    </button>
  );
}
