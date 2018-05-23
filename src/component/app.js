import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Dashboard from './dashboard';
import '../styles/main.scss';

export default class App extends React.Component {
  render() {
    return (
      <div className = 'app'>
        <BrowserRouter>
          <div>
            <header>
              <h1>To-Do App</h1>
              <nav>
                <ul>
                  <li><Link to = '/'>Landing</Link></li>
                  <li><Link to = '/dashboard'>Dashboard</Link></li>
                </ul>
              </nav>
            </header>
            <Route
              exact
              path = '/'
              component = { () => <h2>List what you need to do, and then do that.</h2>}
            />
            <Route
              exact
              path = '/dashboard'
              component = {Dashboard}
            />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
