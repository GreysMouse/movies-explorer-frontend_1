import { Route, Switch } from 'react-router-dom';

import './app.css';

import Main from '../Main/Main';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import AuthPage from '../AuthPage/AuthPage';
import AuthFormInput from '../AuthFormInput/AuthFormInput';

function App() {
  return (
    <div className="app">
      <Main>
        <Techs />
        <AboutMe />
      </Main>
      <Switch>
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
      </Switch>
    </div>
  );
}

export default App;
