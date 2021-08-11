import './portfolio.css';
import './portfolio__title.css';
import './portfolio__link-container.css';
import './portfolio__link.css';
import './portfolio__link-text.css';

function Portfolio(props) {
  return (
    <article className={ "portfolio " + (props.addClasses || "") }>
      <h3 className="portfolio__title">Портфолио</h3>
      <div className="portfolio__link-container">
        <a
          className="portfolio__link"
          href="https://github.com/GreysMouse/how-to-learn/"
          target="_black"
          rel="noreferrer"
        >
          <p className="portfolio__link-text">Статичный сайт</p>
          <p className="portfolio__link-text">↗</p>
        </a>
      </div>
      <div className="portfolio__link-container">
        <a
          className="portfolio__link"
          href="https://github.com/GreysMouse/russian-travel/"
          target="_black"
          rel="noreferrer"
        >
          <p className="portfolio__link-text">Адаптивный сайт</p>
          <p className="portfolio__link-text">↗</p>
        </a>
      </div>
      <div className="portfolio__link-container">
        <a
          className="portfolio__link"
          href="https://github.com/GreysMouse/react-mesto-api-full/"
          target="_black"
          rel="noreferrer"
        >
          <p className="portfolio__link-text">Одностраничное приложение</p>
          <p className="portfolio__link-text">↗</p>
        </a>
      </div>
    </article>
  );
}

export default Portfolio;
