import './about-me.css';
import './about-me__section-header.css';
import './about-me__text-container.css';
import './about-me__name.css';
import './about-me__bio.css';
import './about-me__description.css';
import './about-me__link-list.css';
import './about-me__link.css';
import './about-me__avatar.css';
import './about-me__portfolio.css';

import avatarImg from '../../images/avatar-cat.jpg';

import SectionHeader from '../SectionHeader/SectionHeader';
import Portfolio from '../Portfolio/Portfolio';

function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <SectionHeader addClasses="about-me__section-header">Студент</SectionHeader>
      <div className="about-me__text-container">
        <p className="about-me__name">Mousemousermouser Greys</p>
        <p className="about-me__bio">Фронтенд-разработчик, 30 лет</p>
        <p className="about-me__description">
          Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
          и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 
          2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб&#8209;разработке, 
          начал заниматься фриланс&#8209;заказами и ушёл с постоянной работы.
        </p>
        <ul className="about-me__link-list">
          <li>
            <a
              className="about-me__link"
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
          </li>
          <li>
            <a
              className="about-me__link"
              href="https://github.com/GreysMouse/"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </li>
        </ul>
      </div>
      <img className="about-me__avatar" src={ avatarImg } alt="Аватар студента" />
      <Portfolio addClasses="about-me__portfolio" />
    </section>
  );
}

export default AboutMe;
