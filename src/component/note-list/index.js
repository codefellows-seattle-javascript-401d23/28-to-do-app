import React from 'react';
import NoteItem from './../note-item/index';

export default class NoteList extends React.Component {
  render() {
    return (
      <section className='note-list'>
      <h1> Your notes list </h1>
      <ul> 
        {
          this.props.notes.map((note) => {
            return (
              <NoteItem
              key={note.id}
              note={note}
              handleRemoveItem={this.props.handleRemoveItem}
            />
            );
          })
        }
      </ul>
      </section>
    );
  }
}
