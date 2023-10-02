import styles from "./Home.module.sass";
import { ReactComponent as DevIcon } from "../../programmer.svg";
import Projects from "./projects/Projects";

export default function Home() {
  return (
    <main className={styles.page}>
      <article className={styles.intro}>
        <h2 className={styles.title}>Hi! Welcome to my page.</h2>
        <p>
          My name is Shanon. I am a Web Developer from Rockville, Maryland in
          love with all things color: theory, accessibility, and
          personalization.
        </p>
      </article>
      <article className={styles.info}>
        <h3 className={styles.subtitle}>About Me</h3>
        <div className={styles.about}>
          <DevIcon className={styles.dev} />
          <p>
            My love for code originated on MySpace, where I made layouts for
            kids at school. Since, my love for Web Design grew as
            personalization continuously declined from modern software. My goal
            is to bring color back into User Interface design.
          </p>
        </div>
      </article>
      <Projects />
    </main>
  );
}
