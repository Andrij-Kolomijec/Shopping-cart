import classes from "./Cart.module.css";
import CartItem from "../components/CartItem";
import PropTypes from "prop-types";

function Cart({ cartContent, onClickAdd, onClickSubtract, onClickRemove }) {
  return (
    <div className={classes.cart}>
      <div className={classes.content}>
        <h2>Your shopping cart</h2>
        {cartContent.map((item, index) => (
          <CartItem
            key={index}
            item={item}
            onClickAdd={onClickAdd}
            onClickSubtract={onClickSubtract}
            onClickRemove={onClickRemove}
          />
        ))}
      </div>
      <div className={classes.payment}>
        <h2>Payment</h2>
      </div>
    </div>
  );
}

Cart.propTypes = {
  cartContent: PropTypes.array,
  onClickAdd: PropTypes.func,
  onClickSubtract: PropTypes.func,
  onClickRemove: PropTypes.func,
};

export default Cart;
