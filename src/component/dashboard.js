'use strict';

import React from 'react';
import uuid from 'uuid/v4';
import NoteForm from './note-form';
import NoteList from './note-list';
import autoBind from '../utils/index';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    // this is application state
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

  // TODO:  added during lecture missing something in the note-item module....
  handleUpdatedNote(noteToUpdate) {
    return this.setState((previousState) => {
      return {
        notes: previousState.notes.map(note => note.id !== noteToUpdate.id),
      };
    });
  }

  render() {
    return (
      <section className="dashboard">
        <h1>Llama Done Dashboard</h1>
        <NoteForm
        handleAddNote={this.handleAddNote}
        />
        <NoteList
          notes={this.state.notes}
        handleRemoveNote={this.handleRemoveNote}
          handleUpdateNote={this.handleUpdatedNote}
        />
        { this.state.error && <h2 className="error">Enter a Llama note!</h2> }
      </section>
    );
  }
}
