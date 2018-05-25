'use strict';

import React from 'react';
import uuid from 'uuid/v4';
import NoteForm from '../note-form/note-form';
import NoteList from '../note-list/note-list';
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

  //--------------------------------------------------------
  // MEMBER FUNCTIONS
  //--------------------------------------------------------

  handleAddNote(note) {
    if (note.title === '') {
      return this.setState({ error: true });
    }

    return this.setState((previousState) => {
      return {
        notes: [...previousState.notes, { ...note, id: uuid() }],
      };
    });
  }

  handleRemoveNote(noteToRemove) {
    this.setState((previousState) => {
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

  //--------------------------------------------------------
  // LIFECYCLE HOOKS
  //--------------------------------------------------------

  render() {
    return (
      <section className="dashboard">
        <h1>Dashboard</h1>
        <NoteForm
        handleComplete={this.handleAddNote}
        />
        <NoteList
          notes={this.state.notes}
          handleRemoveNote={this.handleRemoveNote}
          handleUpdateNote={this.handleUpdateNote}
        />
        { this.state.error && <h2 className="error">Enter a note!</h2> }
      </section>
    );
  }
}
