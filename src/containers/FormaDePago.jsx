import React from 'react';
import '../assets/style/components/FormaDePago.scss';
import TC_Logo from '../assets/images/TC_Logo.png';
import Pay_Logo from '../assets/images/PayPal_Logo.png';
import PSE_Logo from '../assets/images/BotonPSE.png';



const FormaDePago = () => (
<section>
<div className="Checkout">
    <div className="Pagos">
      <img className="Pago-item_img" src={TC_Logo} alt="" />
    </div>
    <div className="Pagos">
      <img className="Pago-item_img" src={Pay_Logo} alt="" />
    </div>
    <div className="Pagos">
      <img className="Pago-item_img" src={PSE_Logo} alt="" />
    </div>
</div>

</section> 
);
                          
export default FormaDePago;