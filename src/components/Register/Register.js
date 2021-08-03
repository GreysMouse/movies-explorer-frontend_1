import { Link } from 'react-router-dom';

import './register.css';
import './register__form-container.css';
import './register__title.css';
import './register__form.css';
import './register__redirect-text.css';
import './register__redirect-link.css';

import Logo from '../Logo/Logo';
import AuthForm from '../AuthForm/AuthForm';
import AuthFormInput from '../AuthFormInput/AuthFormInput';

function Register() {
  return (
    <section className="register">
      <div className="register__form-container">
        <Logo />
        <h2 className="register__title">Добро пожаловать!</h2>
        <AuthForm addClasses="register__form" submitButtonText="Зарегистрироваться">
          <AuthFormInput labelText="Имя" spanText="Что то пошлое не так" />
          <AuthFormInput labelText="E-mail" spanText="Что то пошлое не так" />
          <AuthFormInput labelText="Пароль" spanText="Что то пошлое не так" />
        </AuthForm>
        <p className="register__redirect-text">
          Уже зарегистрированы?
          <Link className="register__redirect-link">Войти</Link>
        </p>
      </div>
    </section>
  );
}

export default Register;
