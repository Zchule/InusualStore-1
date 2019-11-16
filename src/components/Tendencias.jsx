import React from 'react';
import '../assets/style/components/Tendencias.scss';

const Tendencias = ({children, title}) => (
  <section>
    <h2 className="tendencias"> {title} </h2>
    {children}
  </section>
);

export default Tendencias;

