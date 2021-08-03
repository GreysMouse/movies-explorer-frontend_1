import './navtab.css';
import './navtab__button.css';
import '../Promo/promo__navtab.css';

function NavTab() {
  return (
    <div className="navtab promo__navtab">
      <button className="navtab__button">О проекте</button>
      <button className="navtab__button" >Технологии</button>
      <button className="navtab__button" >Студент</button>
    </div>
  );
}

export default NavTab;
