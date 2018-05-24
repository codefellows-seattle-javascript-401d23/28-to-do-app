'use strict';

import React from 'react';
import Note from '../note-item/note-item';
import autoBind from '../../utils/utils';

export default class NotesList extends React.Component {

  render() {
    return (
      <div>
        { 
          this.props.notes.length > 0 
          ? 
          <ul className="noteList">
            {
              this.props.notes.map((note) => {
                return (
                  <li key={note.id}>
                  <Note note={note} handleRemoveNote={this.props.handleRemoveNote}/>
                  </li>
                );
              })
            }
          </ul>
          :
          <h3>This is where notes will be displayed</h3>
        }
      </div>
    );
  }
}
