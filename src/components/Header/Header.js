import './header.css';

import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';

function Header(props) {
  return (
    <header className="header">
      <Logo />
      <Navigation mode={ props.mode } />
    </header>
  );
}

export default Header;
