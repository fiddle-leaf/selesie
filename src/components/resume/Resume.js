import styles from "./Resume.module.sass";
export default function Resume() {
  return (
    <main className={styles.resume}>
      <article className={styles.body}>
        <h2 className={styles.title}>Shanon Palomino Salinas</h2>
        <div>
          <p className={styles.intro}>
            Front-End Engineer building colorful and accessible User Interfaces.
          </p>
          <p className={styles.contact}>
            <mark className={styles.email}>
              <a href="mailto:shanonps@icloud.com">shanonps@icloud.com</a>
            </mark>
            <br />
            Rockville, MD.
          </p>
        </div>
        <article>
          <h3>Work in Progress</h3>
          <ul className={styles.ongoing}>
            <li>
              <a href="https://grow.google/" alt="Grow with Google website">
                Grow with Google
              </a>
              <br />
              <strong>UX Designer Certificate</strong>
              <br />
              <span className={styles.date}>October 2023 — March 2024.</span>
            </li>
          </ul>
        </article>
        <article>
          <h3>Professional Experience</h3>
          <article className={styles.work}>
            <div className={styles.exp}>
              <h5>
                <em>Women in Software Engineering</em>
              </h5>
              <strong>Per Scholas</strong>, Remote, May 2023 – September 2023.
              <ul className={styles.details}>
                <li>
                  Immersive training in Full-Stack Engineering with React.js,
                  MongoDB, Node.js, and Express.
                </li>
              </ul>
            </div>
            <div className={styles.exp}>
              <h5>
                <em>Software Engineering Career Experience</em>
              </h5>
              <strong> Apple, Inc</strong>, Remote, June 2021 – November 2021.
              <ul className={styles.details}>
                <li>
                  Design, develop, and deploy new and existing software products
                  within Siri Systems, Headphones UI, and Focus Modes.
                </li>
                <li>
                  Seek out technical solutions and offer alternatives when
                  necessary.
                </li>
                <li>
                  Install, maintain, and debug third-party services to optimize
                  software performance and improve system stability and
                  reliability.
                </li>
              </ul>
            </div>
          </article>
        </article>
        <article>
          <h4 className={styles.subtitle}>Other Experience</h4>
          <article className={styles.work}>
            <div className={styles.exp}>
              <h5>
                <em>Specialist</em>
              </h5>
              <strong>Apple, Inc</strong>, Washington, DC, April 2019 &ndash;
              April 2023.
              <ul className={styles.details}>
                <li>
                  Troubleshoot customer’s computer and device in-store and
                  remotely.
                </li>
                <li>
                  Setup customer computer systems and install software
                  components.
                </li>
                <li>
                  Assist customers with online orders by successfully
                  troubleshooting shipping, payment, or other order issues.
                </li>
              </ul>
            </div>
            <h6>Management & Sales</h6>
            <div className={styles.exp}>
              <ul className={styles.details}>
                <li>
                  Evaluate and resolve customer complaints and assure customer
                  satisfaction and retention.
                </li>
                <li>
                  Train new associates in standard practices and procedures.
                </li>
                <li>
                  Reconcile cash registers and safe, daily deposits, checks and
                  other forms of payment.
                </li>
                <li>
                  Maintain functionality of all technology and visual
                  merchandising displays.
                </li>
                <li>
                  Achieve sales metrics by providing guests with personalized
                  solutions focused on identifying customers’ needs.
                </li>
                <li>
                  Support teammates through feedback and advancement of internal
                  tools and processes.
                </li>
              </ul>
            </div>
          </article>
        </article>
      </article>
    </main>
  );
}
