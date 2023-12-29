import classes from "./ErrorPage.module.css";

function Shop() {
  return (
    <div className={classes.error}>
      <h1>Something went wrong</h1>
      <h3>You will be redirected on the previous page in a few seconds.</h3>
    </div>
  );
}

export default Shop;
