import classes from "./Cart.module.css";
import CartItem from "../components/CartItem";
import PropTypes from "prop-types";

function Cart({ cartContent, onClickAdd, onClickSubtract, onClickRemove }) {
  return (
    <div className={classes.cart}>
      <div className={classes.content}>
        {cartContent.length === 0 ? (
          <h2>Your shopping cart is empty!</h2>
        ) : (
          <>
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
          </>
        )}
      </div>
      <div className={classes.payment}>
        {cartContent.length !== 0 && (
          <div className={classes.wrapper}>
            <h2>Payment</h2>
            <h4>
              Your total:&nbsp;
              {cartContent
                .reduce((acc, i) => {
                  return acc + i.price * i.count;
                }, 0)
                .toFixed(2)}
              &nbsp;€
            </h4>
            <form action="">
              <legend>Choose method:</legend>
              <div>
                <input type="radio" id="card" name="payment" value="card" />
                <label htmlFor="card">Card</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="transfer"
                  name="payment"
                  value="transfer"
                />
                <label htmlFor="transfer">Bank Transfer</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="thoughts"
                  name="payment"
                  value="thoughts"
                />
                <label htmlFor="thoughts">Good Wishes</label>
              </div>
            </form>
            <button onClick={() => alert("Thanks for trying the button!")}>
              Checkout
            </button>
          </div>
        )}
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
