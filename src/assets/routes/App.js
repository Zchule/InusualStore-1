import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../../containers/Home';
import Login from '../../containers/Login';
import Register from '../../containers/Register';
import NotFound from '../../containers/NotFound';
import Layout from '../../components/Layout';
import Shopping from '../../containers/Shopping';
import ListadoCompras from '../../containers/ListadoCompras';
import FormaDePago from '../../containers/FormaDePago';
import FromTC from '../../containers/FormTC';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/login' component={Login}></Route>
        <Route exact path='/register' component={Register}></Route>
        <Route exact path='/shopping' component={Shopping}></Route>
        <Route exact path='/listadocompras' component={ListadoCompras}></Route>
        <Route exact path='/formadepago' component={FormaDePago}></Route>
        <Route exact path='/forma' component={FromTC}></Route>
        <Route component={NotFound}></Route>
      </Switch>
    </Layout>
  </BrowserRouter>
)

export default App;