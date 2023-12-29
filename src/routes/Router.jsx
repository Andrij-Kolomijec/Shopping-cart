import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App, { loader as dataLoader } from "./App.jsx";
import { useState } from "react";
import Shop from "./Shop.jsx";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Cart from "./Cart.jsx";
import ErrorPage from "./ErrorPage.jsx";
import cartContent from "../components/cartContent";

function Router() {
  const [cartItems, setCartItems] = useState(cartContent);
  function handleAddItemToCart(item) {
    setCartItems((prevItems) => {
      const itemIndex = prevItems.findIndex(
        (prevItem) => prevItem.id === item.id
      );
      return itemIndex !== -1
        ? prevItems.map((prevItem, index) =>
            index === itemIndex
              ? { ...prevItem, count: prevItem.count + 1 }
              : prevItem
          )
        : [...prevItems, { ...item, count: 1 }];
    });
  }
  function handleSubtractItemFromCart(item) {
    setCartItems((prevItems) =>
      prevItems.map((prevItem) =>
        prevItem.id === item.id
          ? {
              ...prevItem,
              count: prevItem.count <= 1 ? 1 : prevItem.count - 1,
            }
          : prevItem
      )
    );
  }
  function handleRemoveItemFromCart(item) {
    setCartItems((prevItems) => prevItems.filter((i) => i.id !== item.id));
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App cartContent={cartItems} onClick={handleAddItemToCart} />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "shop",
          loader: dataLoader,
          element: (
            <Shop cartContent={cartItems} onClick={handleAddItemToCart} />
          ),
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "cart",
          element: (
            <Cart
              cartContent={cartItems}
              onClickAdd={handleAddItemToCart}
              onClickSubtract={handleSubtractItemFromCart}
              onClickRemove={handleRemoveItemFromCart}
            />
          ),
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default Router;
