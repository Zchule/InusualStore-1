import React from 'react';
import '../assets/style/components/Container.scss';
import { Link } from 'react-router-dom';

const Container = () => (
  <section>
    <div className="container__hero">
      <div className="container__hero--details">
        <h1>Fashion</h1>
        <h5>nueva colección</h5>
        <Link to='/register'>
          <button className="subscribe">Registrate</button>
        </Link>
      </div>
    </div>
  </section> 
);

export default Container;