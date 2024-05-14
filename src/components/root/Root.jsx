import { NavLink, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./root.css";

export default function Root() {
  const [inventory, setInventory] = useState(null);
  const [cart, setCart] = useState([]);
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

  function handleCartChange(e) {
    e.preventDefault();
    const newCart = [...cart];
    let indexToUpdate = newCart.findIndex(
      (obj) => obj.id === Number(e.target.dataset.id)
    );
    newCart[indexToUpdate].quantity = e.target.value;
    setCart(newCart);
  }

  function handleCartDelete(e) {
    e.preventDefault();
    const newCart = [...cart];
    let indexToDelete = newCart.findIndex(
      (obj) => obj.id === Number(e.target.dataset.id)
    );
    if (indexToDelete !== -1) {
      newCart.splice(indexToDelete, 1);
    }
    setCart(newCart);
  }

  function fixPrice(n) {
    let priceArray = n.toString().split(".");
    if (priceArray.length === 1) {
      return `${priceArray}.00`;
    } else if (priceArray[1].length < 2) {
      return `${priceArray[0]}.${priceArray[1]}0`;
    }
    return n;
  }

  return (
    <>
      <Header cartTotal={cartTotal} />
      <Outlet
        context={{
          inventory,
          error,
          loading,
          cart,
          cartTotal,
          addToCart,
          handleCartDelete,
          handleCartChange,
          fixPrice,
        }}
      />
      <Footer />
    </>
  );
}
