import style from "./cartCard.module.css";

interface CartCardProps {
  handleChange(): void;
  handleDelete(): void;
  item: {
    id: number;
    image: string;
    title: string;
    price: number;
    quantity: number;
  };
  fixPrice(n: number): number;
}

export default function CartCard({
  handleChange,
  handleDelete,
  item,
  fixPrice,
}: CartCardProps): JSX.Element {
  return (
    <article className={style.article}>
      <div className={style.cardTop}>
        <div className={style.imageContainer}>
          <img src={item.image} alt={item.title} />
        </div>
        <div className={style.itemInfo}>
          <h3>{item.title}</h3>
          <p>${fixPrice(item.price)}</p>
        </div>
      </div>

      <form action="" data-id={item.id} onSubmit={handleDelete}>
        <label htmlFor="quantity">
          <input
            data-id={item.id}
            type="number"
            id="quantity"
            defaultValue={item.quantity}
            min="1"
            max="10"
            onChange={handleChange}
          />
        </label>
        <button className={style.button}>Delete</button>
      </form>
    </article>
  );
}
