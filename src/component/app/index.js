import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Dashboard from './dashboard/index';
import Landing from './landing/index';
import '../../styles/main.scss';
import knot from '../../utils/img/knot.png';


export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <div>
            <header>
              <h1>To-Do-List</h1>
              <img src={knot}/>
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
