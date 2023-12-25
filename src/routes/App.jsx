import { Outlet } from "react-router-dom";
import "./App.module.css";
import Footer from "./Footer";
import Header from "./Header";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;

export async function loader() {
  const response = await fetch("https://fakestoreapi.com/products/");
  const resData = await response.json();
  return resData;
}
