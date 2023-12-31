import DevWorkIcon from "../../../docs.svg";

export default function Projects() {
  return (
    <>
      <div className="head">
        <h3 className="subtitle">Projects on Github</h3>
      </div>
      <div className="content">
        <div className="icon">
          <img src={DevWorkIcon} alt="Work UDraw Illustration" />
        </div>
        <article className="cards">
          <div>
            <h4 className="card-title">Vacation Planner</h4>

            <p>
              Austin fashion axe bruh blog freegan DIY mustache tote bag tonx,
              subway tile paleo thundercats church-key synth hot chicken.
            </p>
            <a
              href="https://github.com/fiddle-leaf/vacations"
              alt="Vacation Planner on Github"
              className="source"
            >
              source
            </a>
          </div>
          <div>
            <h4 className="card-title">Astro Birth Day</h4>
            <p>
              Venmo crucifix williamsburg, literally af tonx mumblecore
              single-origin coffee ethical church-key raclette. 3 wolf moon
              offal taiyaki sustainable bruh swag.
            </p>
            <a
              href="https://github.com/fiddle-leaf/astro-birth-day"
              alt="Astro Birth Day on Github"
              className="source"
            >
              source
            </a>
          </div>
        </article>
      </div>
    </>
  );
}
