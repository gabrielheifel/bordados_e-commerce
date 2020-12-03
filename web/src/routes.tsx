import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import Products from './pages/Products';
import Contact from './pages/Contact';

function Routes() {
   return(
      <BrowserRouter>
         <Switch>
            <Route path="/" exact component={Landing}/>
            <Route path="/produtos" component={Products}/>
            <Route path="/contato" component={Contact}/>
         </Switch>
      </BrowserRouter>
   );
}

export default Routes;