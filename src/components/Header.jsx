import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/inusual.png';
import { connect } from 'react-redux';

import '../assets/style/components/Header.scss';

const Header = ({ mylist }) => {
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
            <ion-icon className="icon" name="person"></ion-icon>
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
            <li><a href="#">P. Superiores</a></li>
            <li><a href="#">P. Inferiores</a></li>
            <li><a href="#">Accesorios</a></li>
            <li><a href="#">Zapatos</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    mylist: state.misPrendas,
  }
}

export default connect(mapStateToProps, null)(Header);