import React from 'react';
import uuid from 'uuid/v1';
import NoteForm from './../note-form/index';
// import NoteItem from './../note-list/note-item/index';
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

    note.createdOn = new Date();
    note.id = uuid();

    return this.setState((previousState) => {
      return {
        notes: [...previousState.notes, note],
        error: null,
      };
    });
  }

  // handleRemoveNote() {
  //   return this.setState((previousState) =>)
  //   console.log('test removing note');
  // }

  handleNotesList() {
    return (
        <ul>
          {
            this.state.notes.map((note) => {
              return (
                  <li key={note.id}>
                    {note.title} : {note.content}
                    <br/>
                    <button onClick='handleRemoveNote'>Remove Note</button>
                    <br/>
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
          <h1>UA notes Dashboard</h1>
          <NoteForm
              handleAddNote={this.handleAddNote}
          />
          { this.state.error && <h2 className="error">You must enter a title.</h2> }
          { this.handleNotesList() }
        </section>
    );
  }
}
