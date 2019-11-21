import React from 'react';
import '../assets/style/components/Register.scss';

const Register = () =>(
<section>
    <div className="register__container">
      <div className="register__container--form">
        <div className="form">
          <h4>Nombre</h4>
          <input placeholder="Nombre" type="text" />
        </div>
        <div className="form">
          <h4>Apellidos</h4>
          <input placeholder="Apellidos" type="text" />
        </div>
        <div className="form">
          <h4>Genero</h4>
          <input placeholder="Genero" type="text" />
        </div>
        <div className="form">
          <h4>Edad</h4>
          <input placeholder="Edad" type="text" />
        </div>
        <div className="form">
          <h4>Email</h4>
          <input placeholder="Email" type="email" />
        </div>
        <div className="form__password">
          <h4>Password</h4>
          <input placeholder="password" type="password" />
          <button className="subscribeBtnShow">
            <ion-icon name="eye"></ion-icon>
          </button>
        </div>
        <div className="buttonRegister">
          <button className="subscribeRegister">Registrarse</button>
        </div>
      </div>
    </div>
  </section>
);

export default Register;