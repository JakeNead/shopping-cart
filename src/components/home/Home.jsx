import { useOutletContext, Link } from "react-router-dom";
import style from "./home.module.css";

export default function Home() {
  const { inventory, error, loading } = useOutletContext();

  return (
    <>
      <main className={style.homeMain}>
        <section className={style.heroContainer}>
          <div className={style.heroText}>
            <h1>Welcome to Our FakeStore</h1>
            <p>
              Discover the latest trends in clothing, electronics, and jewelry!
            </p>
            <Link to={"/shop"}>
              <button className={style.heroButton}>Shop Now</button>
            </Link>
          </div>
        </section>

        <section className={style.freeShipping}>
          <h2>Free shipping on orders over $50</h2>
          <p>
            Whether you're stocking up on essentials or treating yourself to
            something special, enjoy our free shipping on us with orders over
            $50! Shop with us today and take advantage of our free shipping
            offer to make your online shopping experience even more rewarding!
          </p>
        </section>
      </main>
    </>
  );
}
