import style from "./about.module.css";

export default function About(): JSX.Element {
  return (
    <main className={style.main}>
      <header className={style.header}>
        <h1 className={style.h1}>Our Story</h1>
        <p className={style.photoCredit}>
          Photo by{" "}
          <a href="https://unsplash.com/@goodbetterbetts?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Aaron Betts
          </a>
        </p>
      </header>
      <div className={style.text}>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae,
          perferendis officia quasi expedita consectetur eveniet maxime quis
          sunt aperiam ipsum totam cumque modi eos minima excepturi. Officiis
          necessitatibus ea repellendus. Veniam quaerat atque officiis dolores.
          Sunt recusandae excepturi dolorum, amet error totam tempore rerum
          officiis blanditiis doloribus dolorem vitae assumenda ullam,
          consequatur molestias debitis esse labore dignissimos, ab veritatis!
          Aut impedit quam aliquid ipsa amet qui quibusdam quia veritatis est
          vitae iure modi laborum exercitationem ea velit cupiditate vel dicta
          ipsam, veniam laboriosam itaque? Temporibus, pariatur unde! Minus vero
          neque laudantium consequuntur molestias animi quas repudiandae
          reprehenderit, alias, ipsam nulla?
        </p>
        <div className={style.buttonContainer}>
          <button className={style.btn}>Link #1</button>
          <button className={style.btn}>Link #2</button>
        </div>
      </div>
    </main>
  );
}
