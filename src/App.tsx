import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./routes/Home";
import MainLayout from "./components/UI/MainLayout";
import ErrorPage from "./routes/ErrorPage";
import About from "./routes/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "shop",
        children: [
          {
            path: ":id",
          },
        ],
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "cart",
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
