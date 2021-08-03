import logoImg from '../../images/logo.svg';

import './logo.css';

function Logo() {
  return (
    <img className="logo" src={ logoImg } alt="логотип" />
  );
}

export default Logo;
