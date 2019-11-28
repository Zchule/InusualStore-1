import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/inusual.png';
import { connect } from 'react-redux';
import userIcon from '../assets/images/user-icon.png';

import '../assets/style/components/Header.scss';
import gravatar from '../utils/gravatar';

import { logoutRequest } from '../actions';


const Header = ( props ) => {

  const { user, mylist } = props;
  const hasUser = Object.keys(user).length > 0;

  const handleLogout = () => {
    props.logoutRequest({});
  };
  return (
    <header>
      <div className="container">
        <div className="container__header imgLogo">
          <Link to='/'>
            <img className="container__header--image" src={logo} alt="" />
          </Link>
        </div>
        <div className="container__header search">
          <input type="text" className="input" placeholder="Buscar..." />
          <div className="button">
            <ion-icon className="icon" name="search"></ion-icon>
          </div>
        </div>
        <div className="container__header sign">
          <div className="container__header--icon">
          <div className='header__menu'>
            <div className='header__menu--profile'>
              {hasUser ?
                <img src={gravatar(user.email)} alt={user.email} /> :
                <ion-icon name="person"></ion-icon>}
            </div>
            <ul className='user'>
              {hasUser ?
                <li><a href='/'>{user.name}</a></li> : null}

              {hasUser ?
                <li><a href='#logout' onClick={handleLogout}>Cerrar Sesión</a></li> : (
                  <li>
                    <Link to='/login'>
                      Iniciar Sesión
                    </Link>
                  </li>
                )}
            </ul>
          </div>

            <Link to='/listadocompras'>
              <div className="cart">
              {mylist.length > 0 && (
                <span className="cart-counter">{mylist.length}</span>
              )}
                <ion-icon className="icon" name="cart"></ion-icon>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <nav>
        <div className="nav__header">
          <ul>
            <li>
              <Link className='a' to='/category/nuevo'>
                Nuevos
              </Link>
            </li>
            
            <li>
              <Link className='a' to='/category/trends'>
                Tendencias
              </Link>
            </li>
            <li>
              <Link className='a' to='/category/nuevo'>
                Chompas
              </Link>
            </li>
            <li>
              <Link className='a' to='/category/trends'>
                poleras
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    mylist: state.misPrendas,
  };
};

const mapDispachToProps = {
  logoutRequest,
};

export default connect(mapStateToProps, mapDispachToProps)(Header);