import './auth-form.css';
import './auth-form__submit-button.css';

function AuthForm(props) {
  return (
      <form className={ "auth-form " + props.addClasses }>
        { props.children }
        <button className="auth-form__submit-button">{ props.submitButtonText }</button>
      </form>
  );
}

export default AuthForm;
