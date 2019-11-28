import React from 'react';
import '../assets/style/components/NotFound.scss';

const NotFound = () =>(
  <>
    <section className="error">
      <section className="error_container">
        <h1 className="error_404">404</h1>
        <p className="error_p">Página no encontrada</p>
      </section>
    </section>
  </>
);

export default NotFound
