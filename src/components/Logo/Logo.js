import { Link } from 'react-router-dom';

import './logo.css';

import logoImg from '../../images/logo.svg';

function Logo() {
  return (
    <Link to="/">
      <img className="logo" src={ logoImg } alt="Логотип" />
    </Link>
  );
}

export default Logo;
