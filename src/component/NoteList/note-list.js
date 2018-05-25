import React from 'react';
import autoBind from '../../utils/';
import NoteItem from '../NoteItem/note-item';

class NoteList extends React.Component {
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
              <li key={note.id}>
                <NoteItem
                  note={note}
                  id={note.id}
                  handleRemoveNote={this.handleRemoveNote}
                  handleUpdateNote={this.handleUpdateNote}
                />
              </li>
            );
          })
        }
      </ul>
    );
  }
}

export default NoteList;
