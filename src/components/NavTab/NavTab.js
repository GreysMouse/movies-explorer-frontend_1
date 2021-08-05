import './nav-tab.css';
import './nav-tab__button.css';

function NavTab(props) {
  return (
    <div className={ "nav-tab " + props.addClasses }>
      <button className="nav-tab__button">О проекте</button>
      <button className="nav-tab__button" >Технологии</button>
      <button className="nav-tab__button" >Студент</button>
    </div>
  );
}

export default NavTab;
