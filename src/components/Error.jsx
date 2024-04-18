import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  console.error(error);
  return (
    <>
      <h2>Oops!</h2>
      <p>Something went wrong.</p>
      <p>{error.status || error.message}</p>
    </>
  );
}
