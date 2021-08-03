import './techs.css';
import './techs__header.css';
import './techs__description.css';
import './techs__list.css';
import './techs__item.css';

import SectionHeader from '../SectionHeader/SectionHeader';

function Techs() {
  return (
    <section className="techs">
      <SectionHeader>Технологии</SectionHeader>
      <p className="techs__header">7 технологий</p>
      <p className="techs__description">
        На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
      </p>
      <ul className="techs__list">
        <li className="techs__item">
          <div className="techs__item">HTML</div>
        </li>
        <li>
          <div className="techs__item">CSS</div>
        </li>
        <li>
          <div className="techs__item">JS</div>
        </li>
        <li>
          <div className="techs__item">React</div>
        </li>
        <li>
          <div className="techs__item">Git</div>
        </li>
        <li>
          <div className="techs__item">Express.js</div>
        </li>
        <li>
          <div className="techs__item">mongoDB</div>
        </li>
      </ul>
    </section>
  );
}

export default Techs;
