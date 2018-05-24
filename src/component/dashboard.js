'use strict';

import React from 'react';
import uuid from 'uuid/v4';
import NoteList from './note/note-list';
import NoteForm from './note/note-form';
import autoBind from '../utils/index';

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

  handleRemoveNote(noteToDelete) {
    return this.setState((previousState) => {
      return {
        notes: previousState.notes.filter(note => note.id !== noteToDelete.id),
      };
    });
  }

  render() {
    return (
      <section className="dashboard">
        <h1>To-Do List</h1>
        <NoteForm 
          handleAddNote={this.handleAddNote}
          />
        <NoteList
        notes={this.state.notes}
        handleRemoveNote={this.handleRemoveNote}
        />
        { this.state.error && <h2 className="error">You must enter a title.</h2> }
      </section>
    );
  }
}
