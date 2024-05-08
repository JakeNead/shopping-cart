import style from "./itemCard.module.css";

export default function ItemCard({ item, addToCart }) {
  const containText = (title) =>
    title.length < 40 ? title : `${title.slice(0, 40)}...`;

  function fixPrice(n) {
    let priceArray = item.price.toString().split(".");
    if (priceArray.length === 1) {
      return `${priceArray}.00`;
    } else if (priceArray[1].length < 2) {
      return `${priceArray[0]}.${priceArray[1]}0`;
    }
    return n;
  }

  return (
    <article className={style.article}>
      <div className={style.imageContainer}>
        <img className={style.cardImage} src={item.image} alt={item.title} />
      </div>
      <h4 className={style.title}>{containText(item.title)}</h4>
      <p className={style.price}>${fixPrice(item.price)}</p>
      <form
        className={style.addToCart}
        action=""
        data-id={item.id}
        onSubmit={addToCart}
      >
        <label htmlFor="quantity">
          <input
            type="number"
            id="quantity"
            defaultValue="1"
            min="1"
            max="10"
          />
        </label>
        <button className={style.button}>Add to cart</button>
      </form>
    </article>
  );
}
