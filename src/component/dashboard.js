import React from 'react';
import uuid from 'uuid/v4';
import autoBind from '../utils/utils';

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
        expenses: [...previousState.expenses, expense],
        error: null,
      };
    });
  }

  handleTotalPrice() {
    return this.state.expenses.reduce((sum, expense) => {
      return sum + Number(expense.price);
    }, 0);
  }

  handleNoteList() {
    return (
      <ul>
        {
          this.state.notes.map((note) => {
            return (
              <li key={note.id}>
                Note goes here.
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

        {
          this.state.error && <h2 className="error">You must enter a title.</h2>
        }
        { this.handleNoteList()}
      </section>
    );
  }
}
