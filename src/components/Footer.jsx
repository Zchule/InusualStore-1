import React from 'react';
import '../assets/style/components/Footer.scss';

import logo from '../assets/images/inusual.png';


const Footer = () => (
    <footer className="footer__container">
    <div className="footer__logo logo">
      <img className="footer__logo--img" src={logo} alt="" />
    </div>
    <div className="footer__category category">
      <ul>
        <li><a href="#">P. Superiores</a></li>
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
        <button className="subscribeBtn">Subscribe</button>
      </div>
    </div>
  </footer>
);

export default Footer;