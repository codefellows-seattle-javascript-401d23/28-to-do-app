import React from 'react';
// import autoBind from '../../../../utils/index';
import GroupsList from './groupsList/index';
import today from '../../../../utils/img/calNow.png';
import soon from '../../../../utils/img/calSoon.png';


export default class Groups extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className='groups'>
        <img src={today}/>
        <h2>Today</h2>
        <img src={soon}/>
        <h2>Next 7 Days</h2>
        <h3>Projects</h3>
        <GroupsList note={{ aside: true }}/>
      </div>
    );
  }
}
