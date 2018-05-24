'use strict';

import React from 'react';
import autoBind from '../utils';

export default class NoteItem extends React.Component {
  constructor(props) {
    super(props);

    autoBind.call(this, NoteItem);
  }
  render() {
    return (
      <li>
        <h1>{this.props.note.title}</h1>
        <p>{this.props.note.content}</p>
        <button onClick={() => this.props.handleRemoveNote(this.props.note)}>Remove note</button>
      </li>
    );
  }
}
