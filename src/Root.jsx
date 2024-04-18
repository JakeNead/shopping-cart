import { NavLink, Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to={"home"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"shop"}>Shop</NavLink>
            </li>
            <li>
              <NavLink to={"cart"}>Cart</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
