import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../modal/modal';
import NoteForm from '../NoteForm/note-form';

class NoteItem extends React.Component {
  render() {
    // Zachary - Don't forget about the map operation being done in Dashboard
    const { note, handleRemoveNote, handleUpdateNote } = this.props;

    const showModal = () => handleUpdateNote({ ...note, editing: true });
    // Zachary - this function doesn't need to be bound because I don't use any input
    const hideModal = () => handleUpdateNote({ ...note, editing: false });

    const updateAndClose = (updatedExpense) => {
      handleUpdateNote({ ...updatedExpense, editing: false });
    };

    return (
      <div className='note-item'>
        <strong>{note.title}</strong> : ${note.price}
        <button onClick={handleRemoveNote.bind(null, note)}> Remove </button>
        <button onClick={showModal}>Update</button>
        <Modal show={note.editing} handleClose={hideModal}>
          { /* Zachary- Everything inside these lines will become props.children */}
          <h3>Editing {note.title}</h3>
          <NoteForm handleComplete={updateAndClose} note={note} />
        </Modal>
      </div>
    );
  }
}

NoteItem.propTypes = {
  note: PropTypes.object,
  handleRemoveNote: PropTypes.func,
  handleUpdateNote: PropTypes.func,
};


export default NoteItem;
