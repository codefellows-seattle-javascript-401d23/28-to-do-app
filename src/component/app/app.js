import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Landing from './../landing/landing';
import Dashboard from '../dashboard/dashboard';
import '../../styles/main.scss';

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
        <div>
          <header>
            <h1>Handy Dandy TODO App</h1>
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
            component={Landing}
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
