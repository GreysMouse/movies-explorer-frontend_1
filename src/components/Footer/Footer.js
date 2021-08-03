import { Link } from 'react-router-dom';

import './footer.css';
import './footer__description.css';
import './footer__container.css';
import './footer__copyright.css';
import './footer__link-list.css';
import './footer__link.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer__description">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__container">
        <p className="footer__copyright">© { currentYear }</p>
        <ul className="footer__link-list">
          <li>
            <Link className="footer__link">Яндекс.Практикум</Link>
          </li>
          <li>
            <Link className="footer__link">Github</Link>
          </li>
          <li>
            <Link className="footer__link">Facebook</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
