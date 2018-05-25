import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../modal/index';
import ExpenseForm from '../expense-form/index';

class ExpenseItem extends React.Component {
  render() {
    const { expense, handleRemoveExpense, handleUpdateExpense } = this.props;

    const showModal = () => handleUpdateExpense({ ...expense, editing: true });

    const hideModal = () => handleUpdateExpense({ ...expense, editing: false });

    const updateAndClose = (updatedExpense) => {
      handleUpdateExpense({ ...updatedExpense, editing: false });
    };

    return (
        <div className='expense-item'>
        <strong>{expense.title}</strong> : ${expense.price}
        <button onClick={handleRemoveExpense.bind(null, expense)}> Remove </button>
        <button onClick={showModal}>Update</button>
        <Modal show={expense.editing} handleClose={hideModal}>
          { /* Vinicio- Everything inside these lines will become props.children */ }
          <h3>Editing {expense.title}</h3>
          <ExpenseForm handleComplete={updateAndClose} expense={expense} />
        </Modal>
      </div>
    );
  }
}

ExpenseItem.propTypes = {
  expense: PropTypes.object,
  handleRemoveExpense: PropTypes.func,
  handleUpdateExpense: PropTypes.func,
};

export default ExpenseItem;
