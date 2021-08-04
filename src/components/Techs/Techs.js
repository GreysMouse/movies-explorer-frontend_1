import './techs.css';
import './techs__title.css';
import './techs__description.css';
import './techs__button-list.css';
import './techs__button.css';

import SectionHeader from '../SectionHeader/SectionHeader';

function Techs() {
  return (
    <section className="techs">
      <SectionHeader>Технологии</SectionHeader>
      <p className="techs__title">7 технологий</p>
      <p className="techs__description">
        На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
      </p>
      <ul className="techs__button-list">
        <li>
          <button className="techs__button">HTML</button>
        </li>
        <li>
          <button className="techs__button">CSS</button>
        </li>
        <li>
          <button className="techs__button">JS</button>
        </li>
        <li>
          <button className="techs__button">React</button>
        </li>
        <li>
          <button className="techs__button">Git</button>
        </li>
        <li>
          <button className="techs__button">Express.js</button>
        </li>
        <li>
          <button className="techs__button">mongoDB</button>
        </li>
      </ul>
    </section>
  );
}

export default Techs;
