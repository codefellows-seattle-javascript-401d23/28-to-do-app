import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Dashboard from './../dashboard/index';
import '../../styles/main.scss';

export default class App extends React.Component {
  render() {
    return (
        <div className='app'>
          <BrowserRouter>
          <div>
            <header>
              <nav>
                <ul>
                  <li><Link to='/'>Home</Link></li>
                  <li><Link to='/dashboard'>Dashboard</Link></li>
                </ul>
              </nav>
              <h1>UA Notes</h1>
            </header>
            <Route
              exact
              path='/'
              component={() =>
                  <p> Welcome to UA Notes.  This handy application is where you can take and keep
                    your notes</p>
              }
            />
            <Route
              exact
              path='/dashboard'
              component={Dashboard}
            />
          </div>
          </BrowserRouter>
        </div>
    );
  }
}
