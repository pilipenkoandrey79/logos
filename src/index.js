import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";

import { App } from './App';
import { Menu } from './Menu';

ReactDOM.render(
    <Router>
        <div>
            <header><Menu /></header>
            <App />
        </div>
    </Router>,
    document.getElementById('root')
);
