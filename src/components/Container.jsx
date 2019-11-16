import React from 'react';
import '../assets/style/components/Container.scss';

const Container = () => (
  <section>
    <div className="container__hero">
      <div className="container__hero--details">
        <h1>Fashion</h1>
        <h5>nueva colección</h5>
        <button className="subscribe">Subscribe</button>
      </div>
    </div>
  </section> 
);

export default Container;