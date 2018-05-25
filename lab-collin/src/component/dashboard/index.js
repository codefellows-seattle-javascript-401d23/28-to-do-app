import React from 'react';
import uuid from 'uuid/v4';
import NoteForm from './../note-form/index';
import NoteItem from '../note-item/note-item';
import autoBind from '../../utils';

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

  handleDeleteNote(noteToRemove) {
    this.setState((previousState) => {
      return {
        notes: previousState.notes.filter(note => 
          note.id !== noteToRemove.id),
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

  handleNotesList() {
    return (
      <ul>
        {
          this.state.notes.map((note) => {
            return (
              <li key={note.id}>
                <NoteItem
                  note={note}
                  handleDeleteNote={this.handleDeleteNote}
                  handleUpdateNote={this.handleUpdateNote}
                  />
              </li>
            );
          })
        }
      </ul>
    );
  }

  render() {
    return (
      <section className="dashboard">
        <h1>Todo List Dashboard</h1>
        <NoteForm 
          handleComplete={this.handleAddNote} 
        />
        { this.state.error && <h2 className="error">You must enter a title.</h2> }
        { this.handleNotesList() }
      </section>
    );
  }
}
