import './main.css';
import '../App/app__main.css';
// import Footer from '../Footer/Footer';

// import Promo from '../Promo/Promo';
// import AboutProject from '../AboutProject/AboutProject';
// import Techs from '../Techs/Techs';
// import NotFoundPage from '../NotFoundPage/NotFoundPage';
// import AuthForm from '../AuthForm/AuthForm';

function Main(props) {
  return (
    <main className="main app__main">
      { props.children }
      {/* <Promo />
      <AboutProject />
      <Techs /> */}
      {/* <NotFoundPage /> */}
      {/* <AuthForm /> */}
      {/* <Footer /> */}
    </main>
  );
}

export default Main;
