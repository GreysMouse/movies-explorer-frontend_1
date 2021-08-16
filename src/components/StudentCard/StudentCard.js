import React from 'react';

import currentUserContext from '../../contexts/currentUserContext';

import './student-card.css';
import './student-card__text-container.css';
import './student-card__name.css';
import './student-card__bio.css';
import './student-card__description.css';
import './student-card__link-list.css';
import './student-card__link.css';
import './student-card__avatar.css';

function StudentCard(props) {
  const currentUser = React.useContext(currentUserContext);

  return (
    <article className={ "student-card " + (props.addClasses || '') }>
      <div className="student-card__text-container">
        { currentUser.name && <p className="student-card__name">{ currentUser.name }</p> }
        { currentUser.bio && <p className="student-card__bio">{ currentUser.bio }</p> }
        { currentUser.description && <p className="student-card__description">{ currentUser.description }</p> }
        { currentUser.links.length !== 0 && 
          <ul className="student-card__link-list">
            {
              currentUser.links.map((link, i) => {
                return (
                  <li key={ i }>
                    <a className="student-card__link" href={ link.link } target="_blank" rel="noreferrer">
                      { link.linkName }
                    </a>
                  </li>
                )
              })
            }
          </ul>
        }
      </div>
      <img className="student-card__avatar" src={ currentUser.avatar } alt="Аватар студента" />
    </article>
  );
}

export default StudentCard;
