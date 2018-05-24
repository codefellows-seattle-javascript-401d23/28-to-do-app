import React from 'react';
import uuid from 'uuid/v4';
import NoteForm from './note-form/index';
import ExpenseForm from '../expense-form/index';
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

  handleAddExpense(expense) {
    if (expense.title === '') {
      return this.setState({ error: true });
    }

    expense.createdOn = new Date();
    expense.id = uuid();

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

  handleExpensesList() {
    return (
      <ul>
        {
          this.state.expenses.map((expense) => {
            return (
              <li key={expense.id}>
                {expense.title} : ${expense.price}
              </li>
            );
          })
        }
      </ul>
    );
  }

  render() {
      // return (
      //   <section className="dashboard">
      //     <h1>Budget Tracker Dashboard</h1>
      //     <ExpenseForm
      //       handleAddExpense={this.handleAddExpense}
      //     />
      //     { this.state.error && <h2 className="error">You must enter a title.</h2> }
      //     { this.handleExpensesList() }
      //     <p> Your total costs are: ${ this.handleTotalPrice() }</p>
      //   </section>
      // );
    return (
      <section className="dashboard">
        <h1>This is a form to add notes</h1>
        <NoteForm
          handleAddNote={this.handleAddNote}
        />
        { this.state.error && <h2 className="error">You must enter a title.</h2> }
      </section>
    );
  }
}
