import { NavLink } from "react-router-dom";
import styles from "./Header.module.sass";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <ul className={styles.links}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="resume">Resume</NavLink>
          </li>
          <li>
            <a href="https://github.com/fiddle-leaf">Github</a>
          </li>
          <li>
            <a href="https://www.buymeacoffee.com/">Buy Me a Coffee</a>
          </li>
        </ul>
      </nav>
      <div className={styles.title}>
        <h1>Selesie</h1>
      </div>
    </header>
  );
}
