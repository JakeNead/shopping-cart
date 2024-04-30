import { useOutletContext } from "react-router-dom";
import ItemCard from "./ItemCard";
import style from "./shop.module.css";

export default function Shop() {
  const { inventory, error, loading, addToCart, fixPrice } = useOutletContext();
  if (error) return <p>A network error was encountered</p>;
  if (loading) return <p>Loading...</p>;

  return (
    <main className={style.main}>
      <div className={style.inventoryContainer}>
        {inventory.map((obj) => (
          <ItemCard
            key={obj.id}
            item={obj}
            addToCart={addToCart}
            fixPrice={fixPrice}
          />
        ))}
      </div>
    </main>
  );
}
