import { useOutletContext } from "react-router-dom";
import ItemCard from "./ItemCard";
import shop from "./shop.module.css";

export default function Shop() {
  const { inventory, error, loading, cart, addToCart } = useOutletContext();
  if (error) return <p>A network error was encountered</p>;
  if (loading) return <p>Loading...</p>;

  return (
    <main>
      <div className={shop.inventoryContainer}>
        {inventory.map((obj) => (
          <ItemCard key={obj.id} item={obj} addToCart={addToCart} />
        ))}
      </div>
    </main>
  );
}
