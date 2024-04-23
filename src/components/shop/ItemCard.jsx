import "./itemCard.css";
import { useState } from "react";

export default function ItemCard({ item, addToCart }) {
  return (
    <article>
      <div className="imageContainer">
        <img src={item.image} alt={item.title} />
      </div>
      <h3>{item.title}</h3>
      <p>${item.price}</p>
      <form action="" data-id={item.id} onSubmit={addToCart}>
        <label htmlFor="quantity">
          <input
            type="number"
            id="quantity"
            defaultValue="1"
            min="1"
            max="10"
          />
        </label>
        <button>Add to cart</button>
      </form>
    </article>
  );
}
