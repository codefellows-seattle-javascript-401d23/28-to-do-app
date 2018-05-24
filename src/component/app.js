'use strict';

import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import '../styles/main.scss';
import Dashboard from './dashboard';
import Landing from './landing';

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <div>
            <header>
              <h1>
                Llama Done
              </h1>
              <nav>
                <ul>
                  <li><Link to="/">landing</Link></li>
                  <li><Link to="/dashboard">dashboard</Link></li>
                </ul>
              </nav>
            </header>
            <Route
              exact
              path="/"
              component={Landing} />
            <Route
              exact
              path="/dashboard"
              component={Dashboard} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
