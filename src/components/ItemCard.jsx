import "./itemCard.css";

export default function InventoryItem({ item }) {
  return (
    <article>
      <img src={item.image} alt={item.title} />
      <h3>{item.title}</h3>
      <p>{item.price}</p>
    </article>
  );
}
