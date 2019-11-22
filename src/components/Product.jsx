import React from 'react';
import '../assets/style/components/Tendencias.scss';
import { connect } from 'react-redux';
import { addCarShop } from '../actions'

const Product = ( props ) => {
  const { id, title, photo, description, precio } = props;

  const handleSetCarShop = () => {
    props.addCarShop({
      id, title, photo, description, precio
    });
  };
  return(
    <div className="products">
      <div className="product__image">
        <div className="product__image--details">
          <img className="photo" src={photo} alt="" />
          <button className="subscribe btntendencias" onClick={handleSetCarShop}>Comprar</button>
        </div>
      </div>
    </div>
  );
};

const mapDispachToProps = {
  addCarShop,
};

export default connect(null, mapDispachToProps)(Product);