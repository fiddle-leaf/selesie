import { NavLink } from "react-router-dom";
import styles from "./Header.module.sass";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.title}>
        <h1>Selesie</h1>
      </div>
      <nav>
        <ul className={styles.links}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="resume">Resume</NavLink>
          </li>
          <li>
            <NavLink to="photos">Photography</NavLink>
          </li>
          <li>
            <a href="https://github.com/fiddle-leaf">Github</a>
          </li>
          <li>
            <a href="https://www.buymeacoffee.com/fiddle.leaf">
              Buy Me a Coffee
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
