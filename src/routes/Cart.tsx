import classes from "./Cart.module.css";
import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export default function Cart() {
  const cartContent = useSelector((state: RootState) => state.cart.items);

  return (
    <div className={classes.cart}>
      <div className={classes.content}>
        {cartContent.length === 0 ? (
          <h2>Your shopping cart is empty!</h2>
        ) : (
          <>
            <h2>Your shopping cart</h2>
            {cartContent.map((item, index) => (
              <CartItem key={index} item={item} />
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
                  return acc + i.price * i.quantity!;
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
