import classes from "./AddToCartButton.module.css";
import PropTypes from "prop-types";
import cart from "/cart.svg";

function AddToCartButton({ onClick }) {
  return (
    <button onClick={onClick} className={classes.add}>
      <img src={cart} alt="Cart" />
      <p>ADD TO CART</p>
    </button>
  );
}

AddToCartButton.propTypes = {
  onClick: PropTypes.func,
};

export default AddToCartButton;
