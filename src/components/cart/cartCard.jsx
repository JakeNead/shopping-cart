import cartCard from "./cartCard.module.css";

export default function CartCard({ handleChange, handleDelete, item }) {
  return (
    <article>
      <div className="cardTop">
        <div className="imageContainer">
          <img src={item.image} alt={item.title} />
        </div>
        <div className="itemInfo">
          <h3>{item.title}</h3>
          <p>${item.price}</p>
        </div>
      </div>

      <form action="" data-id={item.id} onSubmit={handleDelete}>
        <label htmlFor="quantity">
          <input
            type="number"
            id="quantity"
            defaultValue={item.quantity}
            min="1"
            max="10"
            onChange={handleChange}
          />
        </label>
        <button>Delete</button>
      </form>
    </article>
  );
}
