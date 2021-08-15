import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './app.css';
import './app__container.css';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Menu from '../Menu/Menu';
import NotFoundPage from '../NotFoundPage/NotFoundPage';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  function handleMenuButtonClick() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div className="app">
      <div className="app__container">
        <Switch>
          <Route exact path="/">
            <Header location="promo" />
            <Main />
            <Footer />
          </Route>
          <Route path="/movies">
            <Header location="main" onMenuOpen={ handleMenuButtonClick } />
            <Movies />
            <Footer />
          </Route>
          <Route path="/saved-movies">
            <Header location="main" onMenuOpen={ handleMenuButtonClick } />
            <SavedMovies />
            <Footer />
          </Route>
          <Route path="/profile">
            <Header location="main" onMenuOpen={ handleMenuButtonClick } />
            <Profile />
          </Route>
          <Route path="/signup">
            <Register />
          </Route>
          <Route path="/signin">
            <Login />
          </Route>
          <Route path="/nfp" >
            <NotFoundPage />
          </Route>
        </Switch>
        <Menu isOpen={ isMenuOpen } onMenuOpen={ handleMenuButtonClick } />
      </div>
    </div>
  );
}

export default App;
