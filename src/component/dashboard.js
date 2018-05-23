import React from 'react';
import uuid from 'uuid/v4';
import autoBind from '../utils/utils';
import NoteForm from './note-form';

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
    if (note.content === '') {
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

  // handleTotalPrice() {
  //   return this.state.expenses.reduce((sum, expense) => {
  //     return sum + Number(expense.price);
  //   }, 0);
  // }

  handleNoteList() {
    return (
      <ul>
        {
          this.state.notes.map((note) => {
            return (
              <li key={note.id}>
                Note goes here:
                <h3>{note.title}</h3>
                <p>{note.content}</p>
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
        <h1>To-Do List Dashboard</h1>
        <NoteForm
        handleAddNote={this.handleAddNote}
        />
        {
          this.state.error && <h2 className="error">You must enter a title.</h2>
        }
        { this.handleNoteList()}
      </section>
    );
  }
}
