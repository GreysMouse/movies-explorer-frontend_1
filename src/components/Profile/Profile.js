import React from 'react';
import { Link } from 'react-router-dom';

import userNameContext from '../../contexts/userNameContext';

import './profile.css';
import './profile__form-container.css';
import './profile__title.css';
import './profile__form.css';
import './profile__logout-link.css';

import ProfileForm from '../ProfileForm/ProfileForm';

function Profile(props) {
  const userName = React.useContext(userNameContext);

  return (
    <section className="profile">
      <div className="profile__form-container">
        <h2 className="profile__title">{ `Привет, ${userName}` }</h2>
        <ProfileForm
          addClasses="profile__form"
          onUserUpdate={ props.onUserUpdate }
        />
        <Link className="profile__logout-link" onClick={ props.onLogout }>Выйти из аккаунта</Link>
      </div>      
    </section>
  );
}

export default Profile;
