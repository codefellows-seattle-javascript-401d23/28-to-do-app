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

  handleAddNote(note) {
    if (note.title === '') {
      return this.setState({ error: true });
    }

    return this.setState((previousState) => {
      return {
        notes: [...previousState.notes, { ...note, id: uuid() }],
        error: null,
      };
    });
  }

  handleRemoveNote(noteToRemove) {
    return this.setState((previousState) => {
      return {
        notes: previousState.notes.filter(note => note.id !== noteToRemove.id),
      };
    });
  }

  handleUpdateNote(noteToUpdate) {
    return this.setState((previousState) => {
      return {
        notes: previousState.notes.map(note => (note.id === noteToUpdate.id ? noteToUpdate : note)),
      };
    });
  }

  render() {
    return (
      <section className='dashboard'>
        <h1>Note Dashboard</h1>
        <NoteForm 
          handleComplete={this.handleAddNote}
          />
        { this.state.error && <h2 className='error'>You must enter a title</h2> }
        <NoteList 
          notes={this.state.notes}
          handleRemoveNote={this.handleRemoveNote}
          handleUpdateNote={this.handleUpdateNote}
        />
      </section>
    );
  }
}
