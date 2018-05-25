import React from 'react';
import autoBind from '../../utils';
import NoteItem from '../note-item/note-item';

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
            <li key={note.id}>
              <NoteItem note={note} 
              handleRemoveNote={this.props.handleRemoveNote} 
              handleUpdateNote={this.props.handleUpdateNote} //eslint-disable-line
              />
            </li>
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
