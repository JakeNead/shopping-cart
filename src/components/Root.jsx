import { NavLink, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "./Footer";
import "./root.css";

export default function Root() {
  const [inventory, setInventory] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products", { mode: "cors" })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((response) => setInventory(response))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <header>
        <nav>
          <h1>FakeStore</h1>
          <ul>
            <li>
              <NavLink to={"home"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"shop"}>Shop</NavLink>
            </li>
            <li>
              <NavLink to={"cart"}>Cart</NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <Outlet context={[inventory, error, loading]} />
      <Footer />
    </>
  );
}
