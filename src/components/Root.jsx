import { NavLink, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "./Footer";
import "./root.css";

export default function Root() {
  const [inventory, setInventory] = useState(null);
  const [cart, setCart] = useState([]);
  // const [cartTotal, setCartTotal] = useState(null);
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

  function addToCart(e) {
    e.preventDefault();
    const newCart = [...cart];

    const itemToUpdate = newCart.find(
      (item) => item.id === Number(e.target.dataset.id)
    );

    // if in cart
    if (itemToUpdate) {
      itemToUpdate.quantity += Number(e.target["quantity"].value);
    } else {
      // if not in cart
      const newItem = inventory.find(
        (item) => item.id === Number(e.target.dataset.id)
      );
      newItem.quantity = Number(e.target["quantity"].value);
      newCart.push(newItem);
    }
    setCart(newCart);
  }

  function cartTotal() {
    let total = 0;
    for (const item of cart) {
      total += Number(item.quantity);
    }
    return total;
  }

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
              <NavLink to={"about"}>About Us</NavLink>
            </li>
          </ul>
          <NavLink to={"cart"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
            >
              <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" />
            </svg>
          </NavLink>
          <div>{cartTotal()}</div>
        </nav>
      </header>

      <Outlet context={[inventory, error, loading, cart, addToCart]} />
      <Footer />
    </>
  );
}
