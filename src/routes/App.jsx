import { Outlet } from "react-router-dom";
import classes from "./App.module.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PropTypes from "prop-types";
import data from "../components/fakeStoreApiData";

function App({ cartContent }) {
  return (
    <>
      <div className={classes.wrapper}>
        <Header cartContent={cartContent} />
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

App.propTypes = {
  cartContent: PropTypes.array,
};

export default App;

export async function loader() {
  const response = await fetch("https://fakestoreapi.com/products/");
  let resData;
  !response.ok ? (resData = data) : (resData = await response.json());
  return resData;
}
