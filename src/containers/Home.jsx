import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Container from '../components/Container';
import Tendencias from '../components/Tendencias';
import Products from '../components/Products';
import Product from '../components/Product';

import '../assets/style/App.scss';

const Home = ({ mylist, trends }) => {
  return (
    <>
      <Container />
        {mylist.length > 0 && (
          <>
            <Tendencias title="Tendencias"/>
            <Products>
              { mylist.map((item)=>(
                <Product key={item.id} {...item} />
              ))}
            </Products>
          </>
        )}
          <Tendencias title="Tendencias"/>
          <Products>
            { trends.map((item) => (
            <Product key={item.id} {...item} />
            ))}
          </Products>
          <Tendencias title="Productos nuevos"/>
          <Products>
          { trends.map((item)=>(
            <Product key={item.id} {...item} />
          ))}
          </Products>
    </>
  );
}

const mapStateToProps = (state) => {
  console.log('estado', state);
  console.log('estado', state.trends);
  return {
    mylist: state.mylist,
    trends: state.trends,
  }
}

export default connect(mapStateToProps, null)(Home);