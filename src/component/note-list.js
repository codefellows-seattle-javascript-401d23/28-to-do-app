import React from 'react';
import NoteItem from './note-item';

export default class NoteList extends React.Component {
  render() {
    return (
      <div>
        <h3>My To-Do Items:</h3>
        {
          this.props.notes && this.props.notes.length > 0 ?
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
            </ul> :
            <p>Your to-do list is empty.</p>
        }
      </div>
    );
  }
}
