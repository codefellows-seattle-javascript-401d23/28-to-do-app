'use strict';

import React from 'react';
import autoBind from '../utils/index';

export default class NoteItem extends React.Component {
  constructor(props) {
    super(props);

    autoBind.call(this, NoteItem);
  }
  render() {
    return (
      <li>
        {this.props.note.title}
        {this.props.note.content}
        <button onClick={() => this.props.handleRemoveNote(this.props.note)}>Remove note</button>
      </li>
    );
  }
}
