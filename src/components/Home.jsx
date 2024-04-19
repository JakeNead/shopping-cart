import { useOutletContext } from "react-router-dom";

export default function Home() {
  const [inventory, error, loading] = useOutletContext();

  console.log(inventory);
  return <div>home page {`${error}`}</div>;
}
