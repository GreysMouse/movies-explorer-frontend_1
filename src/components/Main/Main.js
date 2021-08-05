import './main.css';

import Promo from '../Promo/Promo';
// import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
// import NotFoundPage from '../NotFoundPage/NotFoundPage';
// import AuthForm from '../AuthForm/AuthForm';

function Main(props) {
  return (
    <main className="main">
      <Promo />
      <Techs />
      <AboutMe />
    </main>
  );
}

export default Main;
