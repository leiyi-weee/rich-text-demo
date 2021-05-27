import * as React from 'react';
import App from './App';
import {
  HashRouter,
  Route,
  Switch
} from 'react-router-dom';

const Router = () => (
  <HashRouter>
    <Switch>
      <Route path="/" component={App} />
    </Switch>
  </HashRouter>
);

export default Router;
