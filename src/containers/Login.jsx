import React from 'react';
import '../assets/style/components/Login.scss';

const Login = () =>(
<section>
    <div className="login__container">
      <div className="login__container-form">
        <div className="form">
          <h4>Email</h4>
          <input className="input" type="email" />
        </div>
        <div className="form">
          <h4>Password</h4>
          <input className="input" type="password" />
        </div>
        <div className="form__recuperation">
          <h4>Forgot your password?</h4>
            <button className="ingresar">Ingresar</button>
        </div>
        <div className="createAccount">
            <a href="">No account? Create one here</a> 
        </div>
      </div>
    </div>
  </section>
);

export default Login;