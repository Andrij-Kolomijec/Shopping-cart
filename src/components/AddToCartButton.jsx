import classes from "./AddToCartButton.module.css";
import PropTypes from "prop-types";

function AddToCartButton({ onClick }) {
  return (
    <button onClick={onClick} className={classes.add}>
      <img src="cart.svg" alt="Cart" />
      <p>ADD TO CART</p>
    </button>
  );
}

AddToCartButton.propTypes = {
  item: PropTypes.object,
  cartContent: PropTypes.array,
  onClick: PropTypes.func,
};

export default AddToCartButton;
