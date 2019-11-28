import React, { useState } from 'react';
import '../assets/style/components/Register.scss';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { registerRequest } from '../actions';

const Register = (props) => {
  const [form, stateValues] = useState({
    name: '',
    lastname: '',
    gender: '',
    age: '',
    email: '',
    password: '',
  });

  const handleInput = (event) => {
    stateValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('register', form);
    props.registerRequest(form);
    props.history.push('/');
  };
return(
<section>
    <div className="register__container">
      <div className="register__container--form">
        <form onSubmit={handleSubmit}>
        <div className="form">
          <h4>Nombre</h4>
          <input 
            placeholder="Nombre" 
            type="text" 
            name='name'
            onChange={handleInput} 
          />
        </div>
        <div className="form">
          <h4>Apellidos</h4>
          <input 
            placeholder="Apellidos" 
            type="text"
            name='lastname'
            onChange={handleInput}
          />
        </div>
        <div className="form">
          <h4>Genero</h4>
          <input 
            placeholder="Genero" 
            type="text"
            name='gender'
            onChange={handleInput} 
          />
        </div>
        <div className="form">
          <h4>Edad</h4>
          <input 
            placeholder="Edad" 
            type="text"
            name='age'
            onChange={handleInput} 
          />
        </div>
        <div className="form">
          <h4>Email</h4>
          <input 
            placeholder="Email" 
            type="email"
            name='email'
            onChange={handleInput}  
          />
        </div>
        <div className="form__password">
          <h4>Password</h4>
          <input 
            placeholder="password" 
            type="password"
            name='password'
            onChange={handleInput} 
          />
          <button className="subscribeBtnShow">
            <ion-icon name="eye"></ion-icon>
          </button>
        </div>
        <div className="buttonRegister">
          <button className="subscribeRegister">Registrarse</button>
        </div>
        </form>
      </div>
    </div>
  </section>
);
};

const mapDispachToProps = {
  registerRequest,
};

export default connect(null, mapDispachToProps)(Register);