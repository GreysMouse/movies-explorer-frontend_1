import './header.css';

import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import MenuButton from '../MenuButton/MenuButton';

function Header(props) {
  return (
    <header className="header">
      <Logo />
      <Navigation location={ props.location } />
      <MenuButton mode={ props.mode } />
    </header>
  );
}

export default Header;
