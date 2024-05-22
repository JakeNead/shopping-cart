import { Outlet } from "react-router-dom";
import React, { SyntheticEvent, useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./root.css";

export interface CartItem {
  category: string;
  description: string;
  image: string;
  rating: { rate: number; count: number };
  title: string;
  id: number;
  quantity: number;
  price: number;
}

export default function Root(): JSX.Element {
  const [inventory, setInventory] = useState([]);
  const [cart, setCart] = useState<CartItem[]>([]);
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

  function addToCart(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    const newCart: CartItem[] = [...cart];
    const quantityValue = Number(
      (e.currentTarget.elements.namedItem("quantity") as HTMLInputElement).value
    );

    const itemId = Number(e.currentTarget.dataset.id);
    const itemToUpdate = newCart.find((item) => item.id === itemId);

    // if in cart
    if (itemToUpdate) {
      itemToUpdate.quantity += quantityValue;
    } else {
      // if not in cart
      if (inventory) {
        const newItem = inventory.find(
          (item: { id: number }) => item.id === itemId
        ) as CartItem | undefined;

        if (newItem) {
          // const newCartItem: CartItem = { ...newItem, quantity: quantityValue };
          newItem.quantity = Number(quantityValue);
          newCart.push(newItem);
        } else {
          throw new Error("Item ID not found in inventory");
        }
      } else {
        throw new Error("Inventory is not defined");
      }
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

  function handleCartChange(e: React.ChangeEvent<HTMLInputElement>): void {
    e.preventDefault();
    const newCart = [...cart];
    let indexToUpdate = newCart.findIndex(
      (obj: { id: number }) => obj.id === Number(e.currentTarget.dataset.id)
    );
    newCart[indexToUpdate].quantity = Number(e.currentTarget.value);
    setCart(newCart);
  }

  function handleCartDelete(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    const newCart = [...cart];

    const target = e.target as HTMLFormElement;
    let indexToDelete = newCart.findIndex(
      (obj) => obj.id === Number(target.dataset.id)
    );
    if (indexToDelete !== -1) {
      newCart.splice(indexToDelete, 1);
    }
    setCart(newCart);
  }

  function fixPrice(n: number) {
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
