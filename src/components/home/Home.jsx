import { useOutletContext } from "react-router-dom";
import home from "./home.module.css";

export default function Home() {
  const { inventory, error, loading } = useOutletContext();

  return (
    <main>
      <div>home page {`${error}`}</div>
    </main>
  );
}
