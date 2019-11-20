import React from 'react';

const FromTC = () => (
<div className="main">
      <h2 className="main__title">Formulario tarjeta de crédito</h2>
</div>

<form className="Checkout__Container-izq" action="/action_page.php">
  Nombre en la Tarjeta: <br><input type="text" name="Nombre_Tarjeta"> </input></br>
  <br> Número de la tarjeta: <br><input type="text" name="Num_Tarjeta"> </input></br></br>
  <br> Fecha de expiración (MM/YYYY):<br><input type="number" name="Mes_Exp" min="1" max="12"></input></br></br>
  <input type="number" name="Año_Exp" min="2019" max="2026"> </input>
  <br> CVV:<br><input type="number" name="CVV" min="001" max="999"></input></br></br>
  <input type="submit" value="Submit"></input> 
</form>

<div className="main">
        <h2 className="main__title">Forma de pago</h2>
  </div>
  
  <div className="main">
    <h2 className="main__title">Redireccionar a Paypal</h2>
  </div>
    
  <div className="main">
    <h2 className="main__title">Redireccionar a PSE</h2>
  </div>



);

export default  FromTC;