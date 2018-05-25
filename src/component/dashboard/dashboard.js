'use strict';

import React from 'react';
import uuid from 'uuid/v4';
import NoteList from '../note-list/note-list';
import NoteForm from '../note-form/note-form';
import autoBind from '../../utils/index';

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

  handleRemoveNote(noteToDelete) {
    return this.setState((previousState) => {
      return {
        notes: previousState.notes.filter(note => note.id !== noteToDelete.id),
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
      <section className="dashboard">
        <h1>To-Do List</h1>
        <NoteForm 
          handleComplete={this.handleAddNote}
          />
        <NoteList
        notes={this.state.notes}
        handleRemoveNote={this.handleRemoveNote}
        handleUpdateNote={this.handleUpdateNote}
        />
        { this.state.error && <h2 className="error">You must enter a title.</h2> }
      </section>
    );
  }
}
