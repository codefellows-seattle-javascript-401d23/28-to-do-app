import React from 'react';
import PropTypes from 'prop-types';
import NoteForm from '../noteform/noteform';
import Modal from '../modal/modal';

export default class NoteItem extends React.Component {
  render() {
    const { note, handleRemoveNote, handleUpdateNote } = this.props;

    const showModal = () => handleUpdateNote({ ...note, editing: true });
    const hideModal = () => handleUpdateNote({ ...note, editing: false });
    const updateAndClose = (updatedNote) => {
      handleUpdateNote({ ...updatedNote, id: note.id, editing: false });
    };

    return (
      <div>
        <li className = 'noteItem'>
            <h2> { note.title } </h2>
            <p onDoubleClick = { showModal }> { note.content } </p>
            <button id = { note.id } onClick = { handleRemoveNote.bind(null, note) }>
             Finished? </button>
        </li>
        <Modal show = { note.editing } handleClose = { hideModal }>
          <NoteForm handleAddNote = { updateAndClose } note = { note } />
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
