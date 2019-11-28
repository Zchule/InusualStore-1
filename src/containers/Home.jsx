import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Container from '../components/Container';
import Tendencias from '../components/Tendencias';
import Products from '../components/Products';
import Product from '../components/Product';

import '../assets/style/App.scss';
import '../assets/style/components/Home.scss';

const Home = ({ tendencias, nuevos }) => {
  return (
    <>
      <Container />
      {nuevos.length > 0 && (
        <>
          <Tendencias title="Nuevos" />
          <Products>
            {nuevos.map((item) => (
              <Product key={item.id} {...item} />
            ))}
          </Products>
        </>
      )}
      {tendencias.length > 0 && (
        <>
          <Tendencias title="Tendencias" />
          <Products>
            {tendencias.map((item) => (
              <Product key={item.id} {...item} />
            ))}
          </Products>
        </>
      )}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    nuevos: state.prendas.filter(item => item.categories.includes('nuevo')),
    tendencias: state.prendas.filter(item => item.categories.includes('trends')),
  }
}

export default connect(mapStateToProps, null)(Home);