import React from 'react';
import uuid from 'uuid/v4';
import NoteForm from '../note-form/note-form';
import NoteList from '../note-list/note-list';
import autoBind from '../../utils';


export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      error: null,
    };
    autoBind.call(this, Dashboard);
  }
  handleAddNotes(note) {
    if (note.title === '') {
      return this.setState({ error: true });
    }
    note.createdOn = new Date();

    return this.setState((previousState) => {
      return {
        notes: [...previousState.notes, { ...note, id: uuid() }], 
        error: null,
      };
    });
  }
  handleRemoveItem(id) {
    return this.setState((previousState) => {
      const filteredNote = previousState.notes.filter(note => (note.id !== id));
      return {
        notes: filteredNote,
        error: null,
      };
    });
  }
  handleUpdateNote(noteToUpdate) {
    return this.setState((previousState) => {
      return {
        notes: previousState.notes.map(note => 
          (note.id === noteToUpdate.id ? noteToUpdate : note)),
      };
    });
  }

  render() {
    return (
      <section className='dashboard'>
      <h2>Notes creator</h2>
      <NoteForm
        handleAddNotes={this.handleAddNotes}
      />
      { this.state.error && <h2 className="error">You must enter a title.</h2> }
      <NoteList
        notes={this.state.notes}
        handleRemoveItem={this.handleRemoveItem}
        handleUpdateNote={this.handleUpdateNote}
      />
      </section>
    );
  }
}
