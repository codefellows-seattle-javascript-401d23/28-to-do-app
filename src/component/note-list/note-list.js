import React from 'react';
import NoteItem from './../note-item/note-item';

export default class NoteList extends React.Component {
  render() {
    return (
      <section className='note-list'>
      <h2> Your notes list </h2>
      <ul> 
        {
          this.props.notes.map((note) => {
            return (
              <NoteItem
              key={note.id}
              note={note}
              handleRemoveItem={this.props.handleRemoveItem}
              handleUpdateNote={this.props.handleUpdateNote}
            />
            );
          })
        }
      </ul>
      </section>
    );
  }
}
