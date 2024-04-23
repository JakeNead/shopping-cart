import { useOutletContext } from "react-router-dom";

export default function Home() {
  const [inventory, error, loading] = useOutletContext();

  return <div>home page {`${error}`}</div>;
}
