import React from 'react';
import uuid from 'uuid/v4';
import autoBind from '../../utils';

export default class NoteList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      x: [],
      x: null,
    };

    autoBind.call(this, NoteList);
  }

  render() {
    return (
      <section className="notelist">
        <h1>notelist</h1>
        <NoteList
          handleAddExpense={this.handleAddExpense}
        />
        { this.state.error && <h2 className="error">You must enter a title.</h2> }
        { this.handleExpensesList() }
        <p> Your total costs are: ${ this.handleTotalPrice() }</p>
      </section>
    );
  }
}
