import React from 'react';
import '../assets/style/components/Tendencias.scss';
import { connect } from 'react-redux';
import { addCarShop } from '../actions';
import { Link } from 'react-router-dom';

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
          <h4 className='title'> {title} </h4>
          <Link to={`/product/${id}`}>
            <img className="photo" src={photo} alt="" />
          </Link>
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