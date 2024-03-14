import { Outlet } from "react-router-dom";
import classes from "./MainLayout.module.css";
import Navigation from "./Navigation";
import Footer from "./Footer";

export default function MainLayout() {
  return (
    <div className={classes.main}>
      <Navigation />
      <div className={classes.content}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
