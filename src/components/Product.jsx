import React from 'react';
import '../assets/style/components/Tendencias.scss';
import prenda from '../assets/images/ropa.jpg';

const Product = ( props ) => {
  const { id, photo} = props;
  return(
    <div className="products">
      <div className="product__image">
        <div className="product__image--details">
          <img className="photo" src={photo} alt="" />
          <button className="subscribe btntendencias">Comprar</button>
        </div>
      </div>
    </div>
  );
};

export default Product;