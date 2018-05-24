import React from 'react';
import uuid from 'uuid';
import NoteForm from './noteform';
import NoteList from './notelist';
import autoBind from '../utils/autobind';

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

    note.createdOn = new Date();
    note.id = uuid();

    return this.setState((previousState) => {
      return {
        notes: [...previousState.notes, note],
        error: null,
      };
    });
  }

  handleRemoveNote(id) {
    return this.setState((previousState) => {
      return ({
        notes: [...previousState.notes].filter(item => item.id !== id),
      });
    });
  }

  render() {
    return (
      <section className = 'dashboard'>
        <h1>To-Do List Dashboard</h1>
        <NoteForm
          className = 'noteForm'
          handleAddNote = { this.handleAddNote }
        />
        <NoteList 
          className = 'noteList'
          handleRemoveNote = { this.handleRemoveNote}
          notes = { this.state.notes }
        />
      </section>
    );
  }
}
