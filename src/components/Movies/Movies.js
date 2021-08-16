import './movies.css';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesUploader from '../MoviesUploader/MoviesUploader';

function Movies(props) {
  return (
    <main className="movies">
      <SearchForm />
      <MoviesCardList onMovieSave={ props.onMovieSave } />
      <MoviesUploader />
    </main>
  );
}

export default Movies;
