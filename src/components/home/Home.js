import styles from "./Home.module.sass";
import DevIcon from "../../design-thinking.svg";
import Projects from "./projects/Projects";

export default function Home() {
  return (
    <main className={styles.page}>
      <article className={styles.intro}>
        <h2 className="title">Hi! My name is Shanon.</h2>
        <p className="desc">
          I am a Front-End Engineer building colorful and accessible User
          Interfaces.
        </p>
      </article>
      <div className="work">
        <article className="info">
          <div className="head">
            <h3 className="subtitle">About Me</h3>
          </div>
          <div className="content">
            <div className={styles.about}>
              <div className="icon">
                <img src={DevIcon} alt="UDraw Illustration - Design Thinking" />
              </div>
              <div className="bits">
                <h4 className={styles.bits}>Peruana in Rockville, Maryland.</h4>
                <h4 className={styles.bits}>Plant Mommy & Photographer.</h4>
                <h4 className={styles.bits}>Styling since 2008.</h4>
              </div>
            </div>
          </div>
        </article>
        <article className="projects">
          <Projects />
        </article>
      </div>
    </main>
  );
}
