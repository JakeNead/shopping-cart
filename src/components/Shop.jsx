import { useOutletContext } from "react";

export default function Shop() {
  const [inventory, error, loading] = useOutletContext();

  if (error) return <p>A network error was encountered</p>;
  if (loading) return <p>Loading...</p>;

  return inventory.map((obj) => {
    console.log();
    return "inventory article";
  });
}
