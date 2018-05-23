import React from 'react';
import NoteItem from './note-item';

export default class NoteList extends React.Component {
  render() {
    return (
      <ul className='note-list'>
        {
          this.props.notes.map((note) => {
            return (
              <NoteItem
                key={note.id}
                id={note.id}
                handleRemoveNote={ this.props.handleRemoveNote }
                title={note.title}
                content={note.content}
              />
            );
          })
        }
      </ul>
    );
  }
}
