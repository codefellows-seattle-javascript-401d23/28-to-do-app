import React from 'react';
import uuid from 'uuid/v4';
import autoBind from '../utils/utils';
import NoteForm from './note-form';
import NoteList from './note-list';

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
    if (note.content === '') {
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

  handleDeleteNote(event) {
    event.preventDefault();
    const idToDelete = event.target.id;
    return this.setState((previousState) => {
      return {
        notes: previousState.notes.filter((note) => {
          return note.id !== idToDelete;
        }),
        error: null,
      };
    });
  }

  render() {
    return (
      <section className="dashboard">
        <h1>To-Do List Dashboard</h1>
        <NoteForm
        handleAddNote={this.handleAddNote}
        />
        {
          this.state.error && <h4 className="error">You must enter some content.</h4>
        }
        <NoteList
        notes={this.state.notes}
        handleDeleteNote={this.handleDeleteNote}
        />
      </section>
    );
  }
}
