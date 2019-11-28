import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../../containers/Home';
import Category from '../../containers/Category';
import Login from '../../containers/Login';
import Register from '../../containers/Register';
import NotFound from '../../containers/NotFound';
import Layout from '../../components/Layout';
import Shopping from '../../containers/Shopping';
import ListadoCompras from '../../containers/ListadoCompras';
import FromTC from '../../containers/FormTC';
import Sucessfull from '../../containers/Sucessfull';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/login' component={Login}></Route>
        <Route exact path='/register' component={Register}></Route>
        <Route exact path='/product/:id' component={Shopping}></Route>
        <Route exact path='/category/:category' component={Category}></Route>
        <Route exact path='/listadocompras' component={ListadoCompras}></Route>
        <Route exact path='/forma' component={FromTC}></Route>
        <Route exact path='/sucessfull' component={Sucessfull}></Route>
        <Route component={NotFound}></Route>
      </Switch>
    </Layout>
  </BrowserRouter>
)

export default App;