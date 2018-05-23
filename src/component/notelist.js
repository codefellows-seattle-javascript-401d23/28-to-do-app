import React from 'react';
import autoBind from '../utils/autobind';
import Dashboard from './dashboard';

export default class NoteList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    autoBind.call(this, Dashboard);
  }
}
