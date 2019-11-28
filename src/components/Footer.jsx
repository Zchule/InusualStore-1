import React from 'react';
import '../assets/style/components/Footer.scss';
import { Link } from 'react-router-dom';

import logo from '../assets/images/inusual.png';


const Footer = () => (
    <footer className="footer__container">
    <div className="footer__logo logo">
      <img className="footer__logo--img" src={logo} alt="" />
    </div>
    <div className="footer__category category">
      <ul>
        <li>
          <Link className='a' to='/category/nuevo'>
            P. Superiores
          </Link>
        </li>
        <li><a href="#">P. Inferiores</a></li>
        <li><a href="#">Accesorios</a></li>
        <li><a href="#">Zapatos</a></li>
      </ul>
    </div>
    <div className="footer__form form">
      <strong>Follow us
        <ion-icon name="logo-instagram"></ion-icon>
        <ion-icon name="logo-pinterest"></ion-icon>
        <ion-icon name="logo-twitter"></ion-icon>
        <ion-icon name="logo-facebook"></ion-icon>
      </strong>
      <div className="footer__form-email">
        <input className="input2" type="text" placeholder="Your E-mail" />
        <Link className="subscribeBtn" to='/register'>
          <button className="subscribeBtn">Subscribe</button>
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;