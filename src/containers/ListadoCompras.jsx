import React from 'react';
import '../assets/style/components/ListadoCompras.scss';
import { connect } from 'react-redux';

const ListadoCompras = ({ mylist }) => {
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
                <div>
                  <ion-icon name="trash"></ion-icon>
                </div>
              </div>
              
            </div>
          ))}
        </div>
        <div className="Checkout__Container-der">
          <h3>Precio Total:</h3>
          <h4 className='total'>$ {mylist.reduce((count , item) => count + item.precio, 0)}</h4>
          <button className="subscribe">
            Confirmar compra
          </button>
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

export default connect(mapStateToProps, null)(ListadoCompras);
