import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../modal/index';
import NoteForm from '../../noteform/index';

export default class NoteItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: this.props,
    };
    this.handleRemove = this.handleRemove.bind(this);
  }
  handleRemove(event) {
    event.preventDefault();
    this.props.remove(this.state.note);
  }
  render() {
    const { note, update } = this.props;

    const showModal = () => update({ ...note, editing: true });
    const hideModal = () => update({ ...note, editing: false });

    const updateAndClose = (updatedExpense) => {
      update({ ...updatedExpense, editing: false });
    };
    console.log(this.state);
    return (
      <li className='noteItem' onDoubleClick={showModal}>
        <p>{note.content}</p>
        <article>{note.createdOn.toString()}</article>
        <button onClick={this.handleRemove}>X</button>
        <Modal show={note.editing} hide={hideModal}>
          <h3>Editing {note.content}</h3>
          <NoteForm handleComplete={updateAndClose} note={this.state} />
        </Modal>
      </li>
    );
  }
}

NoteItem.propTypes = {
  remove: PropTypes.func,
  note: PropTypes.object,
  update: PropTypes.func,
};
