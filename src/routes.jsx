import Root from "./components/Root";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import About from "./components/About";
import Error from "./components/Error";
import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/shop", element: <Shop /> },
      { path: "/cart", element: <Cart /> },
      { path: "/about", element: <About /> },
    ],
  },
]);

export default routes;
