import React from 'react';
import { Route } from "react-router-dom";

import { About } from './pages/About';
import { Home } from './pages/Home';

const App = () => (
    <div className="page-body">
        <Route
            path="/about"
            render={(props) => <About
                                header="about"
                                content="Content of the 'About' page"
                              />
                    }
        />

        <Route
            path="/"
            render={(props) => <Home
                                header="home"
                                content="Content of the 'Home' page"
                               />
                    }
        />
    </div>
);

export { App };
