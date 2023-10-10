import styles from "./Home.module.sass";
import { ReactComponent as DevIcon } from "../../programmer.svg";
import Projects from "./projects/Projects";

export default function Home() {
  return (
    <main className={styles.page}>
      <article className={styles.intro}>
        <h2 className={styles.title}>Hi! My name is Shanon.</h2>
        <p>
          I am a Front-End Engineer from Rockville, Maryland building colorful
          and accessible User Interfaces.
        </p>
      </article>
      <article className={styles.info}>
        <h3 className={styles.subtitle}>About Me</h3>
        <h4 className={styles.bits}>Peruana, Plant Lover, and Photographer</h4>
        <div className={styles.about}>
          <DevIcon className={styles.dev} />
          <div>
            <p>
              My love for code originated on MySpace, where I made layouts for
              kids at school. My goal is to bring color and personalization back
              to UI design.
            </p>
          </div>
        </div>
      </article>
      <Projects />
    </main>
  );
}
