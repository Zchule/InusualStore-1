import React from 'react';
import '../assets/style/components/ListadoCompras.scss';


const ListadoCompras = () => (
  <div className="Main">
    <div className="ListaCompras">
      <div className="Checkout__Container-izq">
        <h3>Lista de Pedidos:</h3>
        <div className="Checkout__Item2">
          <div className="Checkout-element">
            <h4>Vestido Negro - Ref. 5881/884</h4><span>$207.997</span>
          </div>
        </div>
        <div className="Checkout__Item2">
          <div className="Checkout-element">
            <h4>Vestido Rojo - Ref. 5741/654</h4><span>$359.997</span>
          </div>
        </div>
      </div>
      <div className="Checkout__Container-der">
        <h3>Precio Total:</h3>
        <h4>$</h4>
      </div>
      <div>
      <button className="shop-cart-item__action">
        <h3 className="Checkout__info"> Finalizar Compra</h3>
      </button>
    </div>

    </div>
   
  </div>
);

export default ListadoCompras;