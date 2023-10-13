import styles from "./Resume.module.sass";
export default function Resume() {
  return (
    <main className={styles.resume}>
      <article className={styles.body}>
        <h2 className={styles.title}>Shanon Palomino Salinas</h2>
        <div className={styles.blurb}>
          <p className="desc">
            Software Engineer with a passion for Web Design, User Experience,
            and solving complex software issues.
          </p>
          <p className={styles.contact}>
            <mark className={styles.email}>
              <a href="mailto:shanonps@icloud.com">shanonps@icloud.com</a>
            </mark>
            <br />
            <span className={styles.location}>Rockville, MD.</span>
          </p>
        </div>
        <div>
          <h3>Work in Progress</h3>
          <div className={styles.ongoing}>
            <ul>
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
          </div>
        </div>
        <article className="current">
          <div className={styles.skills}>
            <div className="head">
              <h3 className={styles.subtitle}>Skills</h3>
            </div>
            <ul>
              <li>
                <strong>Web Development</strong> &ndash; HTML, CSS, JavaScript,
                Bootstrap
              </li>
              <li>
                <strong>Front-end Frameworks</strong> &ndash; React.js, Remix
              </li>
              <li>
                <strong>Version Control</strong> &ndash; Git
              </li>
              <li>
                <strong>UI/UX Design</strong> &ndash; Wireframing, Prototyping
              </li>
              <li>
                <strong>Software Troubleshooting</strong> &ndash; Debugging,
                Issue Resolution
              </li>
            </ul>
          </div>
          <div>
            <div className="head">
              <h3 className={styles.subtitle}>Projects</h3>
            </div>
            <ul>
              <li>
                <strong>Selesie: Personal Portfolio Website</strong>

                <ul>
                  <li>
                    A responsive personal website to showcase Web Design skills
                    and projects utilizing React.js.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Plan_It</strong>

                <ul>
                  <li>
                    A React.js vacation planning website implementing user
                    authentication and real-time updates with MongoDB, Node.js,
                    and Express server.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Astro Birth Day </strong>

                <ul>
                  <li>
                    Redux Project gets forecast and moon data utilizing Weather
                    API.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </article>
        <article className={styles.other}>
          <h3>Professional Experience</h3>
          <article className={styles.work}>
            <div className={styles.exp}>
              <h5>Women in Software Engineering</h5>
              <strong>Per Scholas</strong>, Remote
              <br />
              <span className={styles.date}>May 2023 – September 2023</span>
              <ul className={styles.details}>
                <li>
                  Immersive training in Full-Stack Engineering with React.js,
                  MongoDB, Node.js, and Express.
                </li>
                <li>
                  <strong>Coursework:</strong> Web Development Fundamentals,
                  Data Structures and Algorithms, Software Engineering
                  Principles, and Database Management.
                </li>
              </ul>
            </div>
            <div className={styles.exp}>
              <h5>Software Engineering Career Experience</h5>
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
                <li>
                  Hands-on experience in diagnosing and resolving software and
                  hardware issues.
                </li>
              </ul>
            </div>
            <div className={styles.exp}>
              <h5>Specialist</h5>
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
                  Provide technical support, including system updates and
                  software installations.
                </li>

                <li>
                  Assist customers with online orders by successfully
                  troubleshooting shipping, payment, or other order inquiries.
                </li>
              </ul>
            </div>
            <div className={styles.exp}>
              <h5>Management & Sales</h5>

              <ul className={styles.details}>
                <li>
                  Evaluate and resolve customer complaints and assure customer
                  satisfaction and retention.
                </li>
                <li>
                  Train new associates in standard practices and procedures,
                  improving overall team efficiency.
                </li>
                <li>
                  Assist in inventory management and ensure stock levels met
                  customer demand.
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
