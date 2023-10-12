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
              <div>
                <img src={DevIcon} alt="UDraw Illustration - Design Thinking" />
              </div>
              <div className="bits">
                <h4 className={styles.bits}>
                  Peruana, Plant Lover, and Photographer
                </h4>
                <h4 className={styles.bits}>Rockville, Maryland, USA</h4>
                <h4 className={styles.bits}>Styling since 2008</h4>

                <div>
                  <p>
                    My love for code originated on MySpace, where I made layouts
                    for kids at school. My goal is to bring color and
                    personalization back to UI design.
                  </p>
                </div>
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
