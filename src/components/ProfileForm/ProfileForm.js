import './profile-form.css';
import './profile-form__input.css';
import './profile-form__input-label.css';
import './profile-form__input-label_last.css';
import './profile-form__input-span.css';
import './profile-form__submit-button.css';

function ProfileForm() {
  return (
    <form className="profile-form">
      <label className="profile-form__input-label">
        Имя
        <input className="profile-form__input" />
      </label>
      <span className="profile-form__input-span">Error</span>
      <label className="profile-form__input-label profile-form__input-label_last">
        E-mail
        <input className="profile-form__input" />
      </label>
      <span className="profile-form__input-span">Error</span>
      <button className="profile-form__submit-button">Редактировать</button>
    </form>
  );
}

export default ProfileForm;
