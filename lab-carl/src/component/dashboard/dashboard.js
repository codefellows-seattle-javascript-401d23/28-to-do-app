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
    note.id = uuid();

    return this.setState((previousState) => {
      return {
        notes: [...previousState.notes, note],
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

  render() {
    return (
      <section className="dashboard">
        <h2>New Note Form</h2>
        <NoteForm handleAddNote={this.handleAddNote}/>
        <p>TODO List</p>
        { this.state.error && <h2 className="error">Each note must have a title!</h2>}
        <NotesList notes={this.state.notes} handleRemoveNote={this.handleRemoveNote}/>
      </section>
    );
  }
}