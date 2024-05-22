import { useOutletContext } from "react-router-dom";
import ItemCard from "./ItemCard";
import style from "./shop.module.css";
import { CartItem } from "../root/Root";

interface ShopProps {
  inventory: [];
  error: boolean;
  loading: boolean;
  addToCart(): void;
  fixPrice(): number;
}

export default function Shop(): JSX.Element {
  const { inventory, error, loading, addToCart } =
    useOutletContext() as ShopProps;
  if (error)
    return (
      <main>
        <p>A network error was encountered</p>
      </main>
    );
  if (loading)
    return (
      <main>
        <p>Loading...</p>
      </main>
    );

  return (
    <main className={style.main}>
      <div className={style.inventoryContainer}>
        {inventory.map((obj: CartItem) => (
          <ItemCard key={obj.id} item={obj} addToCart={addToCart} />
        ))}
      </div>
    </main>
  );
}
