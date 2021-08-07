import './movie-card.css';
import './movie-card__header.css';
import './movie-card__caption.css';
import './movie-card__duration-info.css';
import './movie-card__thumbnail.css';
import './movie-card__add-button.css';

import filmThumbnail from '../../images/film.png';

function MoviesCard() {
  return (
    <div className="movie-card">
      <div className="movie-card__header">
        <p className="movie-card__caption">В погоне за Бенкси</p>
        <p className="movie-card__duration-info">27 минут</p>
      </div>
      <img className="movie-card__thumbnail" src={ filmThumbnail } alt="Постер фильма" />
      <button className="movie-card__add-button" />
    </div>
  );
}

export default MoviesCard;
