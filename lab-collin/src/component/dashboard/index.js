import React from 'react';
import uuid from 'uuid/v4';
import NoteForm from './../note-form/index';
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
    console.log(note);

    return this.setState((previousState) => {
      return {
        notes: [...previousState.notes, note],
        error: null,
      };
    });
  }

  handleDeleteNote(id) {
    return this.setState((previousState) => {
      return {
        notes: [...previousState.notes.filter (note => {
          note.id !== id;
        })],
        error: null,
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
                {note.title} : {note.content}
                <button onClick={(e) => this.handleDeleteNote(note.id, e)}>delete note</button>
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
          handleAddNote={this.handleAddNote} 
        />
        { this.state.error && <h2 className="error">You must enter a title.</h2> }
        { this.handleNotesList() }
      </section>
    );
  }
}
