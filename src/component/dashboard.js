'use strict';

import React from 'react';
import uuid from 'uuid/v4';
import autoBind from '../utils/index';
import NoteForm from './noteform';
import NoteList from './notelist';

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

  handleRemoveNote(targetNote) {
    return this.setState((previousState) => {
      return {
        notes: previousState.notes.filter(note => note.id !== targetNote.id),
      };
    });
  }

  render() {
    return (
      <section className="Dashboard">
        <h2>Note Creating Dashboard</h2>
        <NoteForm handleAddNote={this.handleAddNote} />
        <NoteList handleRemoveNote={this.handleRemoveNote} notes={this.state.notes} />
      </section>
    );
  }
}
