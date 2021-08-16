import React from 'react';

import './movie-card.css';
import './movie-card__header.css';
import './movie-card__caption.css';
import './movie-card__duration-info.css';
import './movie-card__thumbnail.css';
import './movie-card__add-button.css';
import './movie-card__add-button_state_added.css';
import './movie-card__add-button_state_saved.css';

import filmThumbnail from '../../images/film.jpg';

function MoviesCard(props) {
  const [movieCardState, setMovieCardState] = React.useState('free');
  
  
  let buttonAddClass = '';

  if (props.state === 'added') buttonAddClass = 'movie-card__add-button_state_added';
  else if (props.state === 'saved') buttonAddClass = 'movie-card__add-button_state_saved';

  function handleSaveButtonClick() {
    props.onMovieSave();


  }

  return (
    <div className="movie-card">
      <div className="movie-card__header">
        <p className="movie-card__caption">В погонепогонепогонепогонепогоне за Бенкси</p>
        <p className="movie-card__duration-info">27 минут</p>
      </div>
      <img className="movie-card__thumbnail" src={ filmThumbnail } alt="Постер фильма" />
      <button
        className={ "movie-card__add-button " + buttonAddClass }
        onClick={ handleSaveButtonClick }
      >
        { props.state ? '' : 'Сохранить' }
      </button>
    </div>
  );
}

export default MoviesCard;
