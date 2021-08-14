import './menu-button.css';
import './menu-button_location_header.css';
import './menu-button_location_menu.css';

function MenuButton(props) {
  return (
    <button
      className={ "menu-button " + (props.mode === 'authorized' ? 'menu-button_location_header ' : '') + (props.addClasses || '') }
    />
  );
}

export default MenuButton;
