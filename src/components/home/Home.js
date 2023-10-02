import styles from "./Home.module.sass";
import DevIcon from "../../programmer.svg";

export default function Home() {
  return (
    <main className={styles.page}>
      <article className={styles.intro}>
        <h2 className={styles.heading}>Hi! Welcome to my page.</h2>
        <p>
          My name is Shanon. I am a Web Developer from Rockville, Maryland in
          love with all things color: theory, accessibility, and
          personalization.
        </p>
      </article>
      <article>
        <h3 className={styles.subtitle}>About Me</h3>
        <div className={styles.about}>
          <figure>
            <img src={DevIcon} alt="UDraw Programmer icon" />
          </figure>
          <p>
            My love for code originated on MySpace, where I made layouts for
            kids at school. Since, my love for Web Design grew as
            personalization continuously declined from modern software. My goal
            is to bring color back into User Interface design.
          </p>
        </div>
      </article>
    </main>
  );
}
