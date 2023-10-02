import { ReactComponent as DevWorkIcon } from "../../../portfolio.svg";
import styles from "./Projects.module.sass";

export default function Projects() {
  return (
    <article className={styles.projects}>
      <h3 className={styles.subtitle}>Projects on Github</h3>
      <DevWorkIcon className={styles.work} />
    </article>
  );
}
