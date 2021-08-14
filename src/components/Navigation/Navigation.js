import { NavLink } from 'react-router-dom';

import './navigation.css';
import './navigation_location_promo.css';
import './navigation_location_main.css';
import './navigation_location_menu.css';
import './navigation__link.css';
import './navigation__link_active.css';
import './navigation__link_type_registry.css';
import './navigation__link_type_login.css';
import './navigation__link_type_profile.css';
import './navigation__profile-avatar.css';

import profileAvatar from '../../images/header-avatar.svg';

function Navigation(props) {
  return (
    <nav className={ "navigation " + (props.location ? `navigation_location_${props.location}` : '') }>
      { props.location === 'promo' &&
        (
          <>
            <NavLink
              className="navigation__link navigation__link_type_registry"
              to="/signup"
            >
              Регистрация
            </NavLink>
            <NavLink
              className="navigation__link navigation__link_type_login"
              to="/signin"
            >
              Войти
            </NavLink>
          </>
        )
      }
      { props.location === 'main' &&
        (
          <>
            <NavLink
              className="navigation__link"
              activeClassName="navigation__link_active"
              to="/movies"
            >
              Фильмы
            </NavLink>
            <NavLink
              className="navigation__link"
              activeClassName="navigation__link_active"
              to="/saved-movies"
            >
              Сохранённые фильмы
            </NavLink>
            <NavLink
              className="navigation__link navigation__link_type_profile"
              activeClassName="navigation__link_active"
              to="/profile"
            >
              Аккаунт
              <img className="navigation__profile-avatar" src={ profileAvatar } alt="Аватар пользователя" />
            </NavLink>
          </>
        )
      }
      { props.location === 'menu' &&
        (
          <>
            <NavLink
              exact
              className="navigation__link"
              activeClassName="navigation__link_active"
              to="/"
            >
              Главная
            </NavLink>
            <NavLink
              className="navigation__link"
              activeClassName="navigation__link_active"
              to="/movies"
            >
              Фильмы
            </NavLink>
            <NavLink
              className="navigation__link"
              activeClassName="navigation__link_active"
              to="/saved-movies"
            >
              Сохранённые фильмы
            </NavLink>
            <NavLink
              className="navigation__link navigation__link_type_profile"
              activeClassName="navigation__link_active"
              to="/profile"
            >
              Аккаунт
              <img className="navigation__profile-avatar" src={ profileAvatar } alt="Аватар пользователя" />
            </NavLink>
          </>
        )
      }
    </nav>
  );
}

export default Navigation;
