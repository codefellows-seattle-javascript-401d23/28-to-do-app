'use strict';

import React from 'react';
import autoBind from '../../utils/index';

export default class NoteItem extends React.Component {
  constructor(props) {
    super(props);
    
    autoBind.call(this, NoteItem);
  }

  render() {
    return (
      <li>
        <h2>{this.props.note.title}</h2>
        <p>{this.props.note.content}</p>
        <button onClick={() => this.props.handleRemoveNote(this.props.note)}>Remove Note</button>
      </li>
    );
  }
}
