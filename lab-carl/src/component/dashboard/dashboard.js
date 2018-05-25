'use strict';

import React from 'react';
import uuid from 'uuid/v4';
import NoteForm from './../note-form/note-form';
import NotesList from '../notes-list/notes-list';
import autoBind from '../../utils/utils';

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
      return this.setState({ error: true })
    }

    note.createdOn = new Date();

    return this.setState((previousState) => {
      return {
        notes: [...previousState.notes, { ...note, id: uuid() }],
        error: null,
      };
    });
  }

  handleRemoveNote(note) {
    return this.setState((previousState) => {
      const filtered = previousState.notes.filter((item) => {
        return item.id !== note.id
      });
      return {
        notes: filtered,
        error: null,
      }
    });
  }

  handleUpdateNote(noteToUpdate) {
    return this.setState((previousState) => {
      const updatedNotes = previousState.notes.map((note) => {
        return noteToUpdate.id === note.id ? noteToUpdate : note;
      });
      return {
        notes: updatedNotes,
        error: null,
      }
    });
  }

  render() {
    return (
      <section className="dashboard">
        <h1>New Note Form</h1>
        <NoteForm handleComplete={this.handleAddNote}/>
        <hr />
        <h2>TODO List</h2>
        { this.state.error && <h3 className="error">Each note must have a title!</h3>}
        <NotesList notes={this.state.notes} handleRemoveNote={this.handleRemoveNote} handleUpdateNote={this.handleUpdateNote}/>
      </section>
    );
  }
}