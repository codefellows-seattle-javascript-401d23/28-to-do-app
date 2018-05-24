'use strict';

import React from 'react';
import autoBind from '../../utils/index';
import NoteItem from './note-item';

export default class NoteList extends React.Component {
  constructor(props) {
    super(props);
    autoBind.call(this, NoteList);
  }

  handleNoteList() {
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
              />
            );
          })
        }
      </ul>
    );
  }

  render() {
    return (
      <section className="noteList">
        {
         !this.props.notes ?
         <div>
          <p>notes array is empty</p>
         </div> :
         <div>
          {this.handleNoteList()}
         </div>
        }
      </section>
    );
  }
}
