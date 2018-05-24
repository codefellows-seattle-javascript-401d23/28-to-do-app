import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Dashboard from './../Dashboard';
import NoteForm from './../NoteForm';
import '../../styles/main.scss';
import Landing from './../Landing';

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <div>
            <header>
              <h1>Budget Tracker</h1>
              <nav>
                <ul>
                  <li><Link to="/">Landing</Link></li>
                  <li><Link to="/dashboard">Dashboard</Link></li>
                  <li><Link to="/noteform">NoteForm</Link></li>
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
            <Route
              exact
              path="/noteform"
              component={NoteForm}
            />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
