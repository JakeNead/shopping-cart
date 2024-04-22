import "./itemCard.css";
import { useState } from "react";

export default function ItemCard({ item, addToCart }) {
  const [quantity, setQuantity] = useState(1);
  return (
    <article>
      <img src={item.image} alt={item.title} />
      <h3>{item.title}</h3>
      <p>${item.price}</p>
      <form action="" data-id={item.id} onSubmit={addToCart}>
        <label htmlFor="quantity">
          <input type="number" id="quantity" min="1" max="10" />
        </label>
        <button>Add to cart</button>
      </form>
    </article>
  );
}
