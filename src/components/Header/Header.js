import './header.css';

import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import MenuButton from '../MenuButton/MenuButton';

function Header(props) {
  return (
    <header className="header">
      <Logo />
      <Navigation location={ props.location } />
      <MenuButton location={ props.location } onMenuOpen={ props.onMenuOpen } />
    </header>
  );
}

export default Header;
