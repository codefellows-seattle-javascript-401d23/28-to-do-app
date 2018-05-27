import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Dashboard from '../dashboard/dashboard';
import '../../styles/main.scss';

export default class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <BrowserRouter>
          <div>
            <header>
              <h1>Notes</h1>
              <nav>
                <ul>
                  <li><Link to='/'>Landing</Link></li>
                  <li><Link to='/dashboard'>Dashboard</Link></li>                  
                </ul>
              </nav>
            </header>
            <Route 
              exact
              path='/'
              component={() => <h1>This is a To Do app. You can create notes to track what you need to do and then remove the notes once completed.</h1>} // eslint-disable-line
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
