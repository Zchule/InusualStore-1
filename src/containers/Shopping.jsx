import React, { useEffect, useState } from 'react';
import '../assets/style/components/Shopping.scss';
import { addCarShop } from '../actions';
import { connect } from 'react-redux';
import { selectedProduct } from '../actions';

const Shopping = (props) => {
  const { product } = props;
  const { id } = props.match.params;

  const [cover, setCover] = useState(null);

  const hasProduct = Object.keys(product || {}).length > 0;

  useEffect(() => {
    props.selectedProduct(id);
  }, []);

  const chosePhoto = (photo) => {
    setCover(photo);
  };

  const handleSetCarShop = () => {
    props.addCarShop(product);
  };
  return hasProduct ? (
    <section>
      <div className="containerShop">
        <div className="containerShop__store">
          <div className="containerShop__item">
            <img className="containerShop__item--img" src={cover ? cover : product.photo} alt="" />
            <div className="photosContainer">
            <div className="photosItem">
              {product.gallery.map((item, index) => (
                <img key={index} className='galleryPhoto' onClick={() => chosePhoto(item)} src={item} alt="" />
              ))}
            </div>
          </div>
          </div>
        </div>
        <div className="containerShop__store details">
          <div className="containerShop__item">
            <h1>{product.title}</h1>
            <p>Es de tela muy fina, con alagodon licrado</p>
            <h4> Talla</h4>
            <div className="caja">
              <select>
                <option>XS</option>
                <option>S</option>
                <option>M</option>
                <option>L</option>
              </select>
            </div>
            <div className='cant'>
              <label className="Checkout__Item--title" >Cantidad: </label>
              <input className='cantInput' type="number" name="quantity" min="1" max="10" placeholder='1' />
            </div>
            <h4>PRECIO TOTAL: $207.997</h4>
          </div>
          <div className='btnCart'>
            <button className="subscribe" onClick={handleSetCarShop}>Agregar al carrito
            <ion-icon name="cart"></ion-icon>
            </button>
          </div>
        </div>
      </div>
    </section>
  ) : ( <h1>Loading...</h1> )
}

const mapStateToProps = (state) => {
  return {
    product: state.selectedProduct,
  }
}

const mapDispachToProps = {
  selectedProduct,
  addCarShop,
};

export default connect(mapStateToProps, mapDispachToProps)(Shopping);