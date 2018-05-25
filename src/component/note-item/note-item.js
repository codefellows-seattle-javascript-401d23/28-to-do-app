import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../modal/modal';
import NoteForm from '../note-form/note-form';

export default class NoteItem extends React.Component {
  render() {
    const { note, handleDeleteNote, handleUpdateNote } = this.props;

    const showModal = () => handleUpdateNote({ ...note, editing: true });

    const hideModal = () => handleUpdateNote({ ...note, editing: false });

    const updateAndClose = (updatedNote) => {
      handleUpdateNote({ ...updatedNote, editing: false });
    };

    return (
      <li className='note-item'>
        <h3>{note.title}</h3>
        <p>{note.content}</p>
        <button id={note.id} onClick={handleDeleteNote}>Delete This Note</button>
        <button onClick={showModal}>Edit This Note</button>
        <Modal show={note.editing} handleClose={hideModal}>
          <h3>Editing {note.title}</h3>
          <NoteForm handleComplete={updateAndClose} note={note} />
        </Modal>
      </li>
    );
  }
}
NoteItem.propTypes = {
  note: PropTypes.object,
  handleDeleteNote: PropTypes.func,
  handleUpdateNote: PropTypes.func,
};
