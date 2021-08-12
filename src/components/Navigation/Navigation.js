import { Link } from 'react-router-dom';

import './navigation.css';
import './navigation__link.css';
import './navigation__link_type_login.css';
import './navigation__link_type_movies.css';
import './navigation__link_type_saved-movies.css';
import './navigation__link_type_profile.css';
import './navigation__profile-avatar.css';

import profileAvatar from '../../images/header-avatar.svg';

function Navigation(props) {
  return (
    <nav className="navigation">
      { props.mode === 'unauthorized' &&
        (
          <>
            <Link
              className="navigation__link"
              to="/signup"
            >
              Регистрация
            </Link>
            <Link
              className="navigation__link navigation__link_type_login"
              to="/signin"
            >
              Войти
            </Link>
          </>
        )
      }
      { props.mode === 'authorized' &&
        (
          <>
            <Link
              className="navigation__link navigation__link_type_movies"
              to="/movies"
            >
              Фильмы
            </Link>
            <Link
              className="navigation__link navigation__link_type_saved-movies"
              to="/saved-movies"
            >
              Сохранённые фильмы
            </Link>
            <Link
              className="navigation__link navigation__link_type_profile"
              to="/profile"
            >
              Аккаунт
            </Link>
            <img className="navigation__profile-avatar" src={ profileAvatar } alt="Аватар пользователя" />
          </>
        )
      }
    </nav>
  );
}

export default Navigation;
