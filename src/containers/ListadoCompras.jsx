import React from 'react';
import '../assets/style/components/ListadoCompras.scss';
import { connect } from 'react-redux';
import { deletePrenda } from '../actions';
import { Link } from 'react-router-dom';

const ListadoCompras = (props) => {

  const handleDeletePrenda = (id) => {
    props.deletePrenda(id);
  };

  const { mylist } = props;

  return (
    <div className="Main">
      <div className="ListaCompras">
        <div className="Checkout__Container-izq">
          <h3>Lista de Pedidos:</h3>
          {mylist.map((item) => (
            <div className="Checkout__Item2" key={item.id}>
              <div className="Checkout-element">
                <h4> {item.title}</h4>
                <span>${item.precio} </span>
                <div onClick={() => handleDeletePrenda(item.id)}>
                  <ion-icon name="trash"></ion-icon>
                </div>
              </div>
              
            </div>
          ))}
        </div>
        <div className="Checkout__Container-der">
          <h3>Precio Total:</h3>
          <h4 className='total'>$ {mylist.reduce((count , item) => count + item.precio, 0)}</h4>
          <Link to='/forma'>
            <button className="subscribe">
              Confirmar compra
            </button>
          </Link> 
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    mylist: state.misPrendas,
  }
}

const mapDispachToProps = {
  deletePrenda,
};

export default connect(mapStateToProps, mapDispachToProps)(ListadoCompras);
