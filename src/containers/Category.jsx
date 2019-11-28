import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Tendencias from '../components/Tendencias';
import Products from '../components/Products';
import Product from '../components/Product';
import { selectedProducts } from '../actions';

import '../assets/style/App.scss';

const Category = (props) => {
  
  const { products } = props;
  const { category } = props.match.params;
  console.log('category', category );

  const hasProducts = Object.keys(products || {}).length > 0;

  useEffect(() => {
    props.selectedProducts(category);
  }, []);

  return hasProducts ? (
    <>
      {products.length > 0 && (
        <>
          <Tendencias title="Prendas" />
          <Products>
            {products.map((item) => (
              <Product key={item.id} {...item} />
            ))}
          </Products>
        </>
      )}
    </>
  ) : ( <h1>Loading...</h1> )
};

const mapStateToProps = (state) => {
  console.log('state category',state.selectedProducts);
  return {
    products: state.selectedProducts,
  }
}

const mapDispachToProps = {
  selectedProducts,
};

export default connect(mapStateToProps, mapDispachToProps)(Category);