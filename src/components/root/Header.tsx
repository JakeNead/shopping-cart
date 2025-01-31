import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

interface HeaderProps {
  cartTotal(): number;
}

export default function Header({ cartTotal }: HeaderProps) {
  return (
    <header>
      <nav>
        <h1>TechTrove</h1>
        <ul className="navLinks">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"shop"}>Shop</NavLink>
          </li>
          <li>
            <NavLink to={"about"}>About Us</NavLink>
          </li>
        </ul>
        <NavLink className="cartIcon" to={"cart"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" />
          </svg>
          <div className="cartTotal">
            <b>{cartTotal()}</b> items
          </div>
        </NavLink>
      </nav>
    </header>
  );
}
Header.propTypes = {
  cartTotal: PropTypes.func,
};
