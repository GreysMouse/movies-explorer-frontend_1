import React from 'react';

import AuthPage from "../AuthPage/AuthPage";
import AuthFormInput from "../AuthFormInput/AuthFormInput";

function Login() {
  const [userEmail, setUserEmail] = React.useState('');
  const [userPassword, setUserPassword] = React.useState('');

  function handleUserEmailInput(evt) {
    const { value } = evt.target;

    setUserEmail(value);
  }

  function handleUserPasswordInput(evt) {
    const { value } = evt.target;

    setUserPassword(value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
  }

  return (
    <AuthPage
      pageTitle="Рады видеть!"
      submitButtonText="Войти"
      onSubmit={ handleSubmit }
      redirectText="Ещё не зарегистрированы?"
      redirectLink="/signup"
      redirectLinkText="Регистрация"
    >
      <AuthFormInput
        placeholder="Введите адрес электронной почты"
        labelText="E-mail"
        type="email"
        value={ userEmail }
        onChange={ handleUserEmailInput }
        spanText=""
        isSpanVisible={ false }
      />
      <AuthFormInput
        placeholder="Введите пароль"
        labelText="Пароль"
        type="password"
        value={ userPassword }
        onChange={ handleUserPasswordInput }
        spanText=""
        isSpanVisible={ false }
      />
    </AuthPage>
  );
}

export default Login;
