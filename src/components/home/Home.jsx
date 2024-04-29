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

        <section className={style.callToAction}>
          <h2>Ready to Explore?</h2>
          <p>Start browsing our wide selection of products now!</p>
        </section>

        <section id="products">
          <div className="product">
            <img src="clothing.jpg" alt="Clothing"></img>
            <h3>Clothing</h3>
            <p>
              Explore our latest collection of trendy clothing for all
              occasions.
            </p>
            <a href="/clothing" className="btn btn-primary">
              View Clothing
            </a>
          </div>

          <div className="product">
            <img src="electronics.jpg" alt="Electronics"></img>
            <h3>Electronics</h3>
            <p>Discover cutting-edge electronics to elevate your tech game.</p>
            <a href="/electronics" className="btn btn-primary">
              View Electronics
            </a>
          </div>

          <div className="product">
            <img src="jewelry.jpg" alt="Jewelry"></img>
            <h3>Jewelry</h3>
            <p>Find exquisite jewelry pieces to add sparkle to your look.</p>
            <a href="/jewelry" className="btn btn-primary">
              View Jewelry
            </a>
          </div>
        </section>
      </main>
    </>
  );
}

// <main>
//   <div>style page {`${error}`}</div>
// </main>
