import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Container from '../components/Container';
import Tendencias from '../components/Tendencias';
import Products from '../components/Products';
import Product from '../components/Product';

import '../assets/style/App.scss';

const Home = ({ favoritas, nuevos, prendas }) => {
  return (
    <>
      <Container />
        {nuevos.length > 0 && (
          <>
            <Tendencias title="Tendencias"/>
            <Products>
              { nuevos.map((item)=>(
                <Product key={item.id} {...item} />
              ))}
            </Products>
          </>
        )}
          <Tendencias title="Tendencias"/>
          <Products>
            { favoritas.map((item) => (
            <Product key={item.id} {...item} />
            ))}
          </Products>
          <Tendencias title="Productos nuevos"/>
          <Products>
          { prendas.map((item)=>(
            <Product key={item.id} {...item} />
          ))}
          </Products>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    prendas: state.prendas,
    nuevos: state.prendasNuevas,
    favoritas: state.prendasFavoritas,
  }
}

export default connect(mapStateToProps, null)(Home);