import React from 'react';
import uuid from 'uuid/v4';
import NoteForm from './note-form/index';
import NoteList from './note-list/index';
import NoteItem from './note-list/note-item/index';
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
    if (!note) {
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

  handleRemoveNote(noteToRemove) {
    this.setState((previousState) => {
      return {
        notes: previousState.notes.filter(note =>
          note.id !== noteToRemove.id),
      };
    });
  }

  handleUpdateNote(noteToUpdate) {
    console.log(noteToUpdate);
    return this.setState((previousState) => {
      return {
        notes: previousState.notes.map(note =>
          (note.id === noteToUpdate.id ? noteToUpdate : note)),
      };
    });
  }

  handleNoteList() {
    return (
      <ul>
        {
          this.state.notes.map((note) => {
            return (
              <li key={note.id}>
                <NoteItem
                  note={note}
                  handleRemoveNote={this.handleRemoveNote}
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
        <h2>Add Note</h2>
        <NoteForm
          handleComplete={this.handleAddNote}
        />
        { this.state.error && <h2 className="error">You must enter a title.</h2> }
        { this.handleNoteList() }
      <div><br /><br />
        <NoteList notesFromParent={ this.handleNoteList() }/>
      </div>
    </section>

    );
  }
}
