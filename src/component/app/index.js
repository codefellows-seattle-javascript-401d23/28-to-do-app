import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Dashboard from './dashboard/index';
import Landing from './landing/index';
import '../../styles/main.scss';
import '../app/app.scss';
import '../app/landing/landing.scss';
import '../app/dashboard/noteform/noteForm.scss';
import '../app/dashboard/notelist/noteList.scss';
import '../app/dashboard/notelist/noteitem/noteItem.scss';
import '../app/dashboard/groups/groups.scss';
import '../app/dashboard/groups/groupsList/groupsList.scss';
import knot from '../../utils/img/knot.png';


export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <div>
            <header className ='header'>
              <h1><Link to="/">To-Do-List</Link></h1>
              <img src={knot}/>
              <nav>
                <ul>
                  <li ><Link to="/" className='nav'>Home</Link></li>
                  <li ><Link to="/dashboard" className='nav'>Dashboard</Link></li>                
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
