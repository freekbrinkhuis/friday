import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Dashboard from '../Dashboard';
import PipeLines from '../PipeLines';
import PipeLine from '../PipeLine';
import NotFound from '../NotFound';

import './style.css';

const App = () =>(
  <app>
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route path="/pipelines" component={PipeLines} />
      <Route path="/pipeline" component={PipeLine} />
      <Route path="/*" component={NotFound} />
    </Switch>
  </app>
)

export default App;
