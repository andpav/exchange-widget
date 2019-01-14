import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage';
import './style.scss';

const App = () => (
  <div className="app-wrapper">
    <Switch>
      <Route exact path="/" component={HomePage} />
    </Switch>
  </div>
);

export default App;
