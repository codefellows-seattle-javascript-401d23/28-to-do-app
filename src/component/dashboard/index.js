import React from 'react';
import uuid from 'uuid/v4';
import NoteForm from './note-form/index';
import NoteList from './note-list/index';
import autoBind from '../../utils';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
      expenses: [],
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

  // handleRemoveNote(note) {
  //   if (!note) {
  //     return this.setState({ error: true });
  //   }
  // }

  handleNoteList() {
    return (
      <ul>
        {
          this.state.notes.map((note) => {
            return (
              <li key={note.id}>
                {note.title} : {note.content}
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
          handleAddNote={this.handleAddNote}
        />
        { this.state.error && <h2 className="error">You must enter a title.</h2> }

      <div><br /><br />
        <NoteList notesFromParent={ this.handleNoteList() }/>
      </div>
    </section>

    );
  }
}
