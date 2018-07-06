import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import Home from './Home';
import Catalog from './Catalog';

let MyRouter = () => {
  return (
    <div id="content">
      <Route exact path="/" component={Home} />
      <Route path="/catalog" component={Catalog} />
      <Route path="/logout" render={() => <Redirect to="/" />} />
    </div>
  );
};

export default MyRouter;