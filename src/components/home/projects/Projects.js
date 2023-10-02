import { ReactComponent as DevWorkIcon } from "../../../portfolio.svg";
import styles from "./Projects.module.sass";

export default function Projects() {
  return (
    <article className={styles.projects}>
      <h3 className={styles.title}>Projects on Github</h3>
      <DevWorkIcon className={styles.work} />
      <article className={styles.cards}>
        <div>
          <h4 className={styles.subtitle}>Vacation Planner</h4>
          <a
            href="https://github.com/fiddle-leaf/vacations"
            alt="Vacation Planner on Github"
          >
            Source
          </a>
          <p>
            Austin fashion axe bruh blog freegan DIY mustache tote bag tonx,
            subway tile paleo thundercats church-key synth hot chicken.
          </p>
        </div>
        <div>
          <h4 className={styles.subtitle}>Astro Birth Day</h4>
          <a
            href="https://github.com/fiddle-leaf/astro-birth-day"
            alt="Astro Birth Day on Github"
          >
            Source
          </a>
          <p>
            Venmo crucifix williamsburg, literally af tonx mumblecore
            single-origin coffee ethical church-key raclette. 3 wolf moon offal
            taiyaki sustainable bruh swag.
          </p>
        </div>
      </article>
    </article>
  );
}
