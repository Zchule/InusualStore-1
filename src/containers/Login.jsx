import React, { useState }  from 'react';
import '../assets/style/components/Login.scss';
import { connect } from 'react-redux';
import { loginRequest } from '../actions';

const Login = (props) =>{
  const [form, setValues] = useState({
    email: '',
  });
  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form);
    props.loginRequest(form);
    props.history.push('/');
  };
return (
<section>
    <div className="login__container">
      <div className="login__container-form">
        <form onSubmit={handleSubmit}>
          <div className="form">
            <h4>Email</h4>
            <input 
              className="input" 
              name='email' 
              type="email"
              onChange={handleInput} 
            />
          </div>
          <div className="form">
            <h4>Password</h4>
            <input 
              className="input" 
              name='password' 
              type="password"
              onChange={handleInput} 
            />
          </div>
          <div className="form__recuperation">
            <h4>Forgot your password?</h4>
            <button className="ingresar">Ingresar</button>
          </div>
          <div className="createAccount">
              <a href="">No account? Create one here</a> 
          </div>
        </form>
      </div>
    </div>
  </section>
  );
};

const mapDispatchToProps = {
  loginRequest,
};

export default connect(null, mapDispatchToProps)(Login);