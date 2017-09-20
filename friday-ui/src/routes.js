import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from './Components/App';
import Dashboard from './Components/Dashboard';
import NotFound from './Components/NotFound';

class Routes extends Component {
    render(){
        return(
            <BrowserRouter>
                <div>
                    <Route path="/" component={App} />
                    <Route path="/dashboard" component={Dashboard} />
                    
                </div>
            </BrowserRouter>
        )
    }
};

export default Routes;