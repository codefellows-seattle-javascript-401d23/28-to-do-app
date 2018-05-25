'use strict';

import React from 'react';
import uuid from 'uuid/v4';
import autoBind from '../../utils/index';
import NoteForm from '../noteform/noteform';
import NoteList from '../notelist/notelist';

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
        notes: [...previousState.notes, { ...note, id: uuid() }],
        error: null,
      };
    });
  }

  handleUpdateNote(targetNote) {
    return this.setState((previousState) => {
      return {
        notes: previousState.notes.map(note => 
          (note.id === targetNote.id ? targetNote : note)),
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
        <NoteForm handleComplete={this.handleAddNote} />
        <NoteList handleRemoveNote={this.handleRemoveNote} 
        handleUpdateNote={this.handleUpdateNote} 
        notes={this.state.notes} />
      </section>
    );
  }
}
