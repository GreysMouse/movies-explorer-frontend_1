import './auth-form__input.css';
import './auth-form__input-label.css';
import './auth-form__input-span.css';

function AuthFormInput(props) {
  return (
    <>
      <label className="auth-form__input-label">
        { props.labelText }
        <input className="auth-form__input" />
      </label>
      <span className="auth-form__input-span">{ props.spanText }</span>
    </>
  );
}

export default AuthFormInput;
