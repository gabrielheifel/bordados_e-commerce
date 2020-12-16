import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Login from './pages/Login';
import CreateAccount from './pages/CreateAccount';
import LittleCart from './pages/LittleCart';
import PersonalPage from './pages/PersonalPage';

function Routes() {
   return(
      <BrowserRouter>
         <Switch>
            <Route path="/" exact component={Landing}/>
            <Route path="/produtos" component={Products}/>
            <Route path="/contato" component={Contact}/>
            <Route path="/login" component={Login}/>
            <Route path="/create-account" component={CreateAccount}/>
            <Route path="/carrinho" component={LittleCart}/>
            <Route path="/user" component={PersonalPage}/>
         </Switch>
      </BrowserRouter>
   );
}

export default Routes;