import './movies.css';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesUploader from '../MoviesUploader/MoviesUploader';

function Movies() {
  return (
    <main className="movies">
      <SearchForm />
      <MoviesCardList />
      <MoviesUploader />
    </main>
  );
}

export default Movies;
