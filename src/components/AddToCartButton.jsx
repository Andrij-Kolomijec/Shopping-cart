import classes from "./AddToCartButton.module.css";

function AddToCartButton() {
  return (
    <button className={classes.add}>
      <img src="cart.svg" alt="Cart" />
      <p>ADD TO CART</p>
    </button>
  );
}

export default AddToCartButton;
