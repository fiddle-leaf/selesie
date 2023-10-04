import styles from "./Photos.module.sass";

export default function Photography() {
  return (
    <main className={styles.photos}>
      <h2 className={styles.title}>Photography</h2>
      <p>
        Gallery comming soon! Meanwhile, check out my past work on&nbsp;
        <a href="https://unsplash.com/@selesie">Unsplash</a>.
      </p>
      <figure>
        <img
          src="https://i.imgur.com/X6Uhg6Q.jpg"
          alt="Trees and sky with clouds"
        />
      </figure>
    </main>
  );
}
