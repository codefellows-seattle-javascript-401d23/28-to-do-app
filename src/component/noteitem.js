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
        <h3>{ this.props.note.title }</h3>
        <p>{ this.props.note.content }</p>
        <button onClick={() => this.props.handleRemoveNote(this.props.note)} >
        Delete this item</button>
      </li>
    );
  }
}
