import React from 'react';
import '../assets/style/components/Shopping.scss';
import Prenda from '../assets/images/fondo2.jpg';

const Shopping = () => (
  <section>
    <div className="main">
      <h2 className="main__title">Carrito de compras</h2>
    </div>

    <div class="Checkout">
    <div className="Checkout__Container-izq">
      <div className="Checkout__Item">
        <img className="Checkout__Item--img" src={Prenda} alt="" />
      </div>
      <p className="Checkout__Item--title">Vestido</p>
      <p className="Checkout__Item--title">Negro - Ref. 5881/884</p>
      <span>
        <input type="radio" name="Talla" data-value="XS" value="XS" />
        <label>XS</label>
        <input type="radio" name="Talla" data-value="S" value="S" />
        <label>S</label>
        <input type="radio" name="Talla" data-value="M" value="M" />
        <label>M</label>
        <input type="radio" name="Talla" data-value="L" value="L" />
        <label>L</label>
        <input type="radio" name="Talla" data-value="XL" value="XL" />
        <label>XL</label>
      </span>
    </div>

    <div className="Checkout__Container-der">
      <div className="Checkout_Item">
        <p className="Checkout__Item--title">Precio sin impuestos: $99.999</p>
        <div><label>Cantidad: </label>
          <input type="number" name="quantity" min="1" max="10" />

        </div>
        <p className="Checkout__Item--title">Subtotal sin IVA: $199.998</p>
        <p className="Checkout__Item--title">IVA: $37.999</p>
        <p className="Checkout__Item--title">TOTAL: $207.997</p>
      </div>
      <div>
      <button class="shop-cart-item__action">
        <h3 class="Checkout__info"> Agregar a carrito</h3>
      </button>
    </div>
    </div>

    
</div>
  </section>
);

export default Shopping;