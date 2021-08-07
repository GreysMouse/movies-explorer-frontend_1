import { Route, Switch } from 'react-router-dom';

import './app.css';
import './app__container.css';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import AuthPage from '../AuthPage/AuthPage';
import AuthFormInput from '../AuthFormInput/AuthFormInput';
import MoviesCard from '../MoviesCard/MoviesCard';

function App() {
  return (
    <div className="app">
      <div className="app__container">
        <Switch>
          <Route exact path="/">
            <Header />
            <Main />
            <Footer />
          </Route>
          <Route path="/signup">
            <AuthPage
              pageTitle="Добро пожаловать!"
              submitButtonText="Зарегистрироваться"
              redirectText="Уже зарегистрированы?"
              redirectLinkText="Войти"
            >
              <AuthFormInput labelText="Имя" spanText="Что то пошлое не так" />
              <AuthFormInput labelText="E-mail" spanText="Что то пошлое не так" />
              <AuthFormInput labelText="Пароль" spanText="Что то пошлое не так" />
            </AuthPage>
          </Route>
          <Route path="/signin">
            <AuthPage
              pageTitle="Рады видеть!"
              submitButtonText="Войти"
              redirectText="Ещё не зарегистрированы?"
              redirectLinkText="Регистрация"
            >
              <AuthFormInput labelText="E-mail" spanText="Что то пошлое не так" />
              <AuthFormInput labelText="Пароль" spanText="Что то пошлое не так" />
            </AuthPage>
          </Route>
          <Route path="/movies">
            <MoviesCard />
            {/* <Movies /> */}
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
