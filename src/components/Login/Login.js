import React from 'react';

import AuthPage from "../AuthPage/AuthPage";
import AuthFormInput from "../AuthFormInput/AuthFormInput";

function Login(props) {
  const [userEmail, setUserEmail] = React.useState('');
  const [userPassword, setUserPassword] = React.useState('');

  const [isValidUserEmail, setIsValidUserEmail] = React.useState(false);
  const [isValidUserPassword, setIsValidUserPassword] = React.useState(false);

  const [isFormValid, setIsFormValid] = React.useState(true);

  React.useEffect(() => {
    if (!isValidUserEmail || !isValidUserPassword) setIsFormValid(false);
    else setIsFormValid(true);
  }, [isValidUserEmail, isValidUserPassword]);

  function handleUserEmailInput(evt) {
    const { value } = evt.target;

    if (!value) setIsValidUserEmail(false);
    else setIsValidUserEmail(true);

    setUserEmail(value);
  }

  function handleUserPasswordInput(evt) {
    const { value } = evt.target;

    if (!value) setIsValidUserPassword(false);
    else setIsValidUserPassword(true);

    setUserPassword(value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    props.onLogin();
  }

  return (
    <AuthPage
      pageTitle="Рады видеть!"
      submitButtonText="Войти"
      onSubmit={ handleSubmit }
      isFormValid={ isFormValid }
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
