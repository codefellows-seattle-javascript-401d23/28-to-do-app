import React from 'react';
import uuid from 'uuid/v4';
import NoteForm from './../NoteForm';
import autoBind from '../../utils';


export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      notes: [],
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

  handleNotesList() {
    return (
      <ul>
        {
          this.state.notes.map((note) => {
            return (
              <li key={note.id}>
              {note.content} : {note.title}
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
        <h1>Note Dashboard</h1>
        <NoteForm
          handleAddNote={this.handleAddNote}
        />
        { this.state.error && <h2 className="error">You must enter a title</h2> }
        <p> All notes: { this.handleNotesList(this.state) }</p>
      </section>
    );
  }
}
