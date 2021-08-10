import './profile-form.css';
import './profile-form__input.css';
import './profile-form__input-label.css';
import './profile-form__input-label_last.css';
import './profile-form__submit-button.css';

function ProfileForm(props) {
  return (
    <form className={"profile-form " + (props.addClasses || "")}>
      <label className="profile-form__input-label">
        Имя
        <input className="profile-form__input" />
      </label>
      <label className="profile-form__input-label profile-form__input-label_last">
        E-mail
        <input className="profile-form__input" />
      </label>
      <button className="profile-form__submit-button">Редактировать</button>
    </form>
  );
}

export default ProfileForm;
