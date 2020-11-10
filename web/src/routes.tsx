import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import Products from './pages/Products';

function Routes() {
   return(
      <BrowserRouter>
         <Switch>
            <Route path="/" exact component={Landing}/>
            <Route path="/produtos" component={Products}/>
         </Switch>
      </BrowserRouter>
   );
}

export default Routes;