import './search-form.css';
import './search-form__input.css';
import './search-form__submit-button.css';
import './search-form__filter-checkbox.css';

import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <form className="search-form">
      <input className="search-form__input" placeholder="Фильм" />
      <button className="search-form__submit-button" />
      <FilterCheckbox addClasses="search-form__filter-checkbox" />
    </form>
  );
}

export default SearchForm;
