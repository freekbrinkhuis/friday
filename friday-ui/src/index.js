import React from 'react';
import ReactDOM from 'react-dom';

import App from './Components/App';
import Header from './Components/Header';
import { BrowserRouter } from 'react-router-dom';

import './index.css';

const Main = () => (
    <div>
        <Header />
        <App />
    </div>
)

ReactDOM.render((
    <BrowserRouter>
        <Main />
    </BrowserRouter>
    ),document.getElementById('root'))