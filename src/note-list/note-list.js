'use strict';

import React from 'react';
import autoBind from '../utils/index';
import NoteItem from '../note-item/note-item';

export default class NoteList extends React.Component {
  constructor(props) {
    super(props);

    autoBind.call(this, NoteList);
  }

  render() {
    return (
      <ul>
        {
          this.props.notes.map((note) => {
            return (
              <NoteItem
              key={note.id}
              note={note}
              id={note.id}
              handleRemoveNote={this.props.handleRemoveNote}
              handleUpdateNote={this.props.handleUpdateNote}
              />
            );
          })
        }
      </ul>
    );
  }
}
