import React from 'react';
import '../assets/style/components/FormTC.scss';
import Visa from '../assets/images/visa.png';
import Visa1 from '../assets/images/visa1.png';
import Visa2 from '../assets/images/visa2.png';
import Mastercard from '../assets/images/mastercad.png';
import American from '../assets/images/amercican.png';
import Pay_Logo from '../assets/images/PayPal_Logo.png';
import PSE_Logo from '../assets/images/BotonPSE.png';
import { Link } from 'react-router-dom';

const FromTC = () => {
return (
    <>
    <div className='conteiner'>
      <h2 className='conteiner__title'>Tarjeta de crédito o débito</h2>
      <div className="conteiner__form">
        <h2>Formulario tarjeta de crédito</h2>
        <div className="container__image">
          <div className="container__image--pagos">
            <img className="img" src={Visa} alt="" />
          </div>
          <div className="container__image--pagos">
            <img className="img" src={Mastercard} alt="" />
          </div>
          <div className="container__image--pagos">
            <img className="img" src={American} alt="" />
          </div>
          <div className="container__image--pagos">
            <img className="img" src={Pay_Logo} alt="" />
          </div>
          <div className="container__image--pagos">
            <img className="img" src={PSE_Logo} alt="" />
          </div>
        </div>
        <div className="formPagos">
          <div className="formPagos__details">
            <h3>Nombre del titular</h3>
            <input type="text" placeholder='Como aparece en la tarjeta'/>
            <h3>Fecha de expiración</h3>
            <div className="formPagos__details--dateExp">
              <input type="text" placeholder='Mes'/>
              <input type="text" placeholder='Año'/>
            </div>
          </div>
          <div className="formPagos__details">
            <h3>Número de tarjeta</h3>
            <input type="text"/>
            <h3>Código de seguridad</h3>
            <div className="formPagos__details--dateExp">
              <div className="container__image--pagos">
                <input type="text" placeholder='3 dígitos'/>
              </div>
              <div className="container__image--pagos">
                <img className="img" src={Visa1} alt="" />
              </div>
              <div className="container__image--pagos">
                <img className="img" src={Visa2} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="BtnSubscribe">
          <button className="subscribe">
            Pagar
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default FromTC;