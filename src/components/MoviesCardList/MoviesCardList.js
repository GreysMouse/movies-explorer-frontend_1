import './movies-card-list.css';

import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList(props) {
  return (
    <section className={ "movies-card-list " + (props.addClasses || "")}>
      <MoviesCard onMovieSave={ props.onMovieSave } />
      <MoviesCard state="saved" />
      <MoviesCard state="added" />
    </section>
  );
}

export default MoviesCardList;
