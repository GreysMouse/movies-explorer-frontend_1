import { Link } from 'react-router-dom';

import './portfolio.css';
import './portfolio__title.css';
import './portfolio__link.css';
import './portfolio__link-text.css';

function Portfolio(props) {
  return (
    <article className={ "portfolio " + (props.addClasses || "") }>
      <h3 className="portfolio__title">Портфолио</h3>
      <Link className="portfolio__link">
        <p className="portfolio__link-text">Статичный сайт</p>
        <p className="portfolio__link-text">↗</p>
      </Link>
      <Link className="portfolio__link">
        <p className="portfolio__link-text">Адаптивный сайт</p>
        <p className="portfolio__link-text">↗</p>
      </Link>
      <Link className="portfolio__link">
        <p className="portfolio__link-text">Одностраничное приложение</p>
        <p className="portfolio__link-text">↗</p>
      </Link>
      <Link className="portfolio__link">
        <p className="portfolio__link-text">Одностраничное приложение Одностраничное приложение</p>
        <p className="portfolio__link-text">↗</p>
      </Link>
      <Link className="portfolio__link">
        <p className="portfolio__link-text">Одностраничное приложение</p>
        <p className="portfolio__link-text">↗</p>
      </Link>
    </article>
  );
}

export default Portfolio;
