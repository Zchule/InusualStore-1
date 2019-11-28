import React from 'react';
import '../assets/style/components/Sucessfull.scss';
import sucess from '../assets/images/check.png';

const Sucessfull = () =>(
  <>
    <section className="succesContainer">
      <section className="succesContainer__message">
        <div className="succesContainer__message--title">
          <img className='ckeck' src={sucess} alt=""/>
        </div>
        <div className="succesContainer__message--p">
          <h1 className="Sucessfull">Felicitaciones!!!</h1>
          <p>Su compra fue realizada</p>
        </div>
      </section>
    </section>
  </>
);

export default Sucessfull