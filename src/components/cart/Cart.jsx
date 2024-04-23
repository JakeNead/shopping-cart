import CartCard from "./CartCard";
import { useOutletContext, Link } from "react-router-dom";
import "./cart.css";

export default function Cart() {
  const { cart, cartTotal, handleCartChange, handleCartDelete } =
    useOutletContext();

  function subTotalPrice() {
    if (cart) {
      let price = cart.reduce((a, c) => a + c.quantity * c.price, 0);
      return price;
    }
  }
  return (
    <main>
      {cart.length === 0 ? (
        <>
          <h2>Your Shopping Cart is empty</h2>
          <p>
            Your cart currently has nothing in it. Which means there's plenty of
            room for all of the amazing items you could possibly want!
          </p>
          <p>
            If you have a FakeStore account, be sure to <b>Sign In </b>to see
            your personal shopping cart.
          </p>
          <Link to={"shop"}>
            <button>Continue Shopping</button>
          </Link>
        </>
      ) : (
        <>
          <div className="cartItems">
            {cart.map((item) => (
              <CartCard
                key={item.id}
                item={item}
                handleChange={handleCartChange}
                handleDelete={handleCartDelete}
              />
            ))}
          </div>
          <div className="orderSummary">
            <div className="subtotal">
              <p>Subtotal ({cartTotal()} items)</p>
              <p>${subTotalPrice()}</p>
            </div>
            <div className="shipping">
              <p>Shipping</p>
              <p>{subTotalPrice() > 50 ? "free" : "$9.95"}</p>
            </div>
          </div>
        </>
      )}
    </main>
  );
}
