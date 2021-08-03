import './promo.css';
import './promo__banner.css';
import './promo__header.css';

import NavTab from '../NavTab/NavTab';

function Promo() {
  return (
    <section className="promo">
      <div className="promo__banner">
        <h1 className="promo__header">Учебный проект студента факультета Веб-разработки.</h1>
        <NavTab />
      </div>
    </section>
  );
}

export default Promo;
