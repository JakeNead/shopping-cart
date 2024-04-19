import { useOutletContext } from "react-router-dom";
import ItemCard from "./ItemCard";
import "./shop.css";

export default function Shop() {
  const [inventory, error, loading] = useOutletContext();
  if (error) return <p>A network error was encountered</p>;
  if (loading) return <p>Loading...</p>;

  return (
    <main>
      {inventory.map((obj) => (
        <ItemCard key={obj.id} item={obj} />
      ))}
    </main>
  );
}
