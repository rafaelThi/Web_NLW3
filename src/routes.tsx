import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing'

import OrphaMap from './pages/OrphaMaps'

import Orphanages  from './pages/Orphanage'

import CreateOrphanage from './pages/CreateOrphanage'

function Routes() {
  return(
    <BrowserRouter>
      <Switch>
        <Route path= "/" exact component={Landing} />    
        <Route path= "/app" component={OrphaMap} />    
        
        <Route path= "/orphanages/create" component={CreateOrphanage} />    
        <Route path= "/orphanages/:id" component={Orphanages} />    
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;