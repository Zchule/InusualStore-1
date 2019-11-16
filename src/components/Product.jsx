import React from 'react';
import PropTypes from 'prop-types';
import '../assets/style/components/Tendencias.scss';
import prenda from '../assets/images/ropa.jpg';

const Product = ({ photo }) => (
  <div className="products">
    <div className="product__image">
      <div className="product__image--details">
        <img className="photo" src={photo} alt="" />
        <button className="subscribe btntendencias">Comprar</button>
      </div>
    </div>
  </div>
);

Product.PropTypes = {
  photo: PropTypes.string,
}

export default Product;