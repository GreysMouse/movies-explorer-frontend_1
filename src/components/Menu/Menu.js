import './menu.css';

import MenuButton from '../MenuButton/MenuButton';
import Navigation from '../Navigation/Navigation';

function Menu() {
  return (
    <aside className="menu">
      <MenuButton addClasses="menu-button_location_menu" />
      <Navigation location="menu" />
    </aside>
  );
}

export default Menu;
