import React from 'react';

import userNameContext from '../../contexts/userNameContext';

import './student-card.css';
import './student-card__text-container.css';
import './student-card__name.css';
import './student-card__bio.css';
import './student-card__description.css';
import './student-card__link-list.css';
import './student-card__link.css';
import './student-card__avatar.css';

import studentAvatar from '../../images/avatar-cat.jpg';

function StudentCard(props) {
  const userName = React.useContext(userNameContext);

  return (
    <article className={ "student-card " + (props.addClasses || '') }>
      <div className="student-card__text-container">
        <p className="student-card__name">{ userName }</p>
        <p className="student-card__bio">Фронтенд-разработчик, 100 лет</p>
        <p className="student-card__description">
          Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
          и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 
          2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб&#8209;разработке, 
          начал заниматься фриланс&#8209;заказами и ушёл с постоянной работы.
        </p>
        <ul className="student-card__link-list">
          <li>
            <a
              className="student-card__link"
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
          </li>
          <li>
            <a
              className="student-card__link"
              href="https://github.com/GreysMouse/"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </li>
        </ul>
      </div>
      <img className="student-card__avatar" src={ studentAvatar } alt="Аватар студента" />
    </article>
  );
}

export default StudentCard;
