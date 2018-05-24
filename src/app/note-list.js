import React from 'react';
import autoBind from '../utils';
import NoteItem from './note-item';

export default class NoteList extends React.Component {
  constructor(props) {
    super(props);

    autoBind.call(this, this.handleNoteList);
  }

  handleNoteList() {
    return (
      <ul>
        { this.props.notes.map((note) => {
          return (
        <NoteItem 
          handleRemoveNote={this.props.handleRemoveNote} 
          key={note.id} 
          note={note}
          id={note.id} />
          );
        }) }
      </ul>
    );
  }

  render() {
    return (
      <div>
        {
          this.props.notes ?
          <div>
            <h3>Notes:</h3>
            { this.handleNoteList() }
          </div> :
          <div>Please enter a note.</div>
        }
      </div>
    );
  }
}
