import styles from "./Resume.module.sass";
export default function Resume() {
  return (
    <main className={styles.resume}>
      <article className={styles.body}>
        <h2 className={styles.title}>Shanon Palomino Salinas</h2>
        <div className={styles.blurb}>
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
          <div className={styles.edu}>
            <ul className={styles.ongoing}>
              <li>
                <a href="https://grow.google/" alt="Grow with Google website">
                  Grow with Google
                </a>
                <br />
                <strong>UX Designer Certificate</strong>
                <br />
                <span className={styles.date}>October 2023 — March 2024</span>
              </li>
            </ul>
            <div className={styles.projects}>
              <h4 className={styles.subtitle}>Projects</h4>
              <ul>
                <li>
                  <em>
                    <strong>Vacation Planner </strong>
                    using the MERN Stack.
                  </em>
                  <ul>
                    <li>
                      Set transportation and budget details, add to-do lists or
                      notes, and get forecast for day of arrival to destination.
                    </li>
                  </ul>
                </li>
                <li>
                  <em>
                    <strong>Astro Birth Day </strong>
                    with Redux.js.
                  </em>
                  <ul>
                    <li>Get forecast and moon data for your 2023 birthday!</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </article>
        <article>
          <h3>Professional Experience</h3>
          <article className={styles.work}>
            <div className={styles.exp}>
              <h5>
                <em>Women in Software Engineering</em>
              </h5>
              <strong>Per Scholas</strong>, Remote
              <br />
              <span className={styles.date}>May 2023 – September 2023</span>
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
              <strong> Apple, Inc</strong>, Remote
              <br />
              <span className={styles.date}>June 2021 – November 2021</span>
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
        <article className={styles.other}>
          <h4 className={styles.subtitle}>Other Experience</h4>
          <article className={styles.work}>
            <div className={styles.exp}>
              <h5>
                <em>Specialist</em>
              </h5>
              <strong>Apple, Inc</strong>, Washington, DC
              <br />
              <span className={styles.date}>April 2019 &ndash; April 2023</span>
              <ul className={styles.details}>
                <li>
                  Achieve sales metrics by providing guests with personalized
                  solutions focused on identifying customers’ needs.
                </li>
                <li>
                  Maintain functionality of all technology and visual
                  merchandising displays.
                </li>
                <li>
                  Troubleshoot customer’s computer and device in-store and
                  remotely.
                </li>
                <li>
                  Setup customer device systems and install software components.
                </li>

                <li>
                  Assist customers with online orders by successfully
                  troubleshooting shipping, payment, or other order inquiries.
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
