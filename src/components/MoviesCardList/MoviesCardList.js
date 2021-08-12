import './movies-card-list.css';

import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList(props) {
  return (
    <section className={ "movies-card-list " + (props.addClasses || "")}>
      <MoviesCard />
      <MoviesCard state="saved" />
      <MoviesCard state="added" />
    </section>
  );
}

export default MoviesCardList;
