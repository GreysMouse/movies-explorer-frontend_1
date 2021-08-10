import { Link } from 'react-router-dom';

import './profile.css';
import './profile__form-container.css';
import './profile__title.css';
import './profile__form.css';
import './profile__logout-link.css';

import ProfileForm from '../ProfileForm/ProfileForm';

function Profile() {
  return (
    <section className="profile">
      <div className="profile__form-container">
        <h2 className="profile__title">Привет, Виталий!</h2>
        <ProfileForm addClasses="profile__form" />
        <Link className="profile__logout-link">Выйти из аккаунта</Link>
      </div>      
    </section>
  );
}

export default Profile;
