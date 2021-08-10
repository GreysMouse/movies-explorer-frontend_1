import './movies-card-list.css';

import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList(props) {
  return (
    <section className={ "movies-card-list " + (props.addClasses || "")}>
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />
      {/* <MoviesCard />
      <MoviesCard />
      <MoviesCard />
      <MoviesCard /> */}
    </section>
  );
}

export default MoviesCardList;
