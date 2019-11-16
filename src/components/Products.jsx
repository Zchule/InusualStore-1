import React from 'react';
import '../assets/style/components/Tendencias.scss';
import prenda from '../assets/images/ropa.jpg';

const Products = ({children}) => (
  <div className="products">
    {children}
  </div>

);

export default Products;