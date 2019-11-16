import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/inusual.png';

import '../assets/style/components/Header.scss';

const Header = () => (
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
          <ion-icon className="icon" name="cart"></ion-icon>
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

export default Header;