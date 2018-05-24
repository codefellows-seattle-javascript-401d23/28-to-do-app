'use strict';

import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Dashboard from './dashboard';
// import NoteItem from './noteitem';
import '../styles/main.scss';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <header>
              <h1>Notes Application</h1>
              <nav>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/dashboard">Dashboard</Link></li>
                </ul>
              </nav>
            </header>
            <Route
              exact
              path="/"
              component={() => 
                <h1> This here be an application that is used for 
                creating, keeping and deleting notes.</h1> }
              />
            <Route
              exact
              path="/dashboard"
              component={Dashboard}
              />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
