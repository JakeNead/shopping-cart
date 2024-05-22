import CartCard from "./CartCard";
import { useOutletContext, Link } from "react-router-dom";
import style from "./cart.module.css";

interface CartContextProps {
  cart: [];
  cartTotal(): number;
  handleCartChange(): void;
  handleCartDelete(): void;
  fixPrice(): number;
}

export default function Cart(): JSX.Element {
  const { cart, cartTotal, handleCartChange, handleCartDelete, fixPrice } =
    useOutletContext() as CartContextProps;

  interface Cart {
    quantity: number;
    price: number;
  }

  function subTotalPrice(cart: Cart[]): string {
    if (cart) {
      let price: number = cart.reduce((a, c) => a + c.quantity * c.price, 0);
      return price.toFixed(2);
    }
    throw new Error("Something has gone wrong in subTotalPrice");
  }
  return (
    <main className={style.main}>
      {cart.length === 0 ? (
        <>
          <div className={style.emptyCartContainer}>
            <h2 className={style.emptyCartHeader}>
              Your Shopping Cart is empty
            </h2>
            <p className={style.emptyCartinfo}>
              Your cart currently has nothing in it. Which means there's plenty
              of room for all of the amazing items you could possibly want!
            </p>
            <p className={style.emptyCartSignIn}>
              If you have a FakeStore account, be sure to <b>Sign In </b>to see
              your personal shopping cart.
            </p>
            <Link to={"/shop"}>
              <button className={style.emptyCartShopButton}>
                Continue Shopping
              </button>
            </Link>
          </div>
        </>
      ) : (
        <>
          <div className={style.cartItems}>
            {cart.map(
              (item: {
                id: number;
                image: string;
                title: string;
                price: number;
                quantity: number;
              }) => (
                <CartCard
                  key={item.id}
                  item={item}
                  handleChange={handleCartChange}
                  handleDelete={handleCartDelete}
                  fixPrice={fixPrice}
                />
              )
            )}
          </div>
          <div className={style.orderSummary}>
            <div className={style.subtotal}>
              <p>Subtotal ({cartTotal()} items)</p>
              <p>${subTotalPrice(cart)}</p>
            </div>
            <div className={style.shipping}>
              <p>Shipping</p>
              <p>{Number(subTotalPrice(cart)) > 50 ? "free" : "$9.95"}</p>
            </div>
            <button className={style.button}>Secure Checkout</button>
          </div>
        </>
      )}
    </main>
  );
}
