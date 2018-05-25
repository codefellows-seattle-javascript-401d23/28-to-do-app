import React from 'react';
import autoBind from './../../utils';

const emptyExpenseFormState={
  title: '',
  price: 0,
};

export default class ExpenseForm extends React.component {
  constructor(props) {
    super(props);

    this.state = this.props.expense ? this.props.expense : emptyExpenseFormState

    autoBind.call(this, ExpenseForm);
  }

  handSubmit(event) {
    event.preventDefault();
    this.props.handleAddExpense(this.state);
  }

  handleChange(event) {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
          <form onSubmit={this.handleSubmit}>
          <input
          type="text"
          name="title"
          placeholder="title"
          value={this.state.title}
          onChange={this.handleChange}
          />
          <input
            type="number"
            name="price"
            placeholder="price"
            value={this.state.price}
            onChange={this.handleChange}
            />
            <button type="submit">Create an Expense</button>
            </form>
    );
  }
}

ExpenseForm.propTypes = {
  expense: PropTypes.object,
  handleComplete: PropTypes.func,
}
