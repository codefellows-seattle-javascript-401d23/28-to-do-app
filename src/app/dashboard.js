import React from 'react';
import uuid from 'uuid/v4';
import NoteForm from './note-form';
import NoteList from './note-list';
import autoBind from '../utils';

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

    note.id = uuid();

    return this.setState((previousState) => {
      return {
        notes: [...previousState.notes, note],
        error: null,
      };
    });
  }

  handleRemoveNote(noteToDelete) {
    return this.setState((previousState) => {
      return {
        notes: previousState.notes.filter(note => note.id !== noteToDelete.id),
      };
    });
  }

  render() {
    return (
      <section className='dashboard'>
        <h1>Note Dashboard</h1>
        <NoteForm 
          handleAddNote={this.handleAddNote}
          />
        { this.state.error && <h2 className='error'>You must enter a title</h2> }
        <NoteList 
          notes={this.state.notes}
          handleRemoveNote={this.handleRemoveNote}
        />
      </section>
    );
  }
}
