'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import NoteForm from '../note-form/note-form';
import Modal from '../modal/modal';

export default class NoteItem extends React.Component {
  render() {
    const { note, handleRemoveNote, handleUpdateNote } = this.props;

    const showModal = () => handleUpdateNote({ ...note, editing: true });
    const hideModal = () => handleUpdateNote({ ...note, editing: false });
    const updateAndClose = updatedNote => handleUpdateNote({ ...updatedNote, editing: false });

    return (
      <li className='NoteItem'>
        <h2><strong>{note.title}</strong></h2>
        <p onDoubleClick={showModal}>{note.content}</p>
        <button onClick={handleRemoveNote.bind(null, note)}>Remove Note</button>
        <button onClick={showModal}>Update</button>
        <Modal show={note.editing} handleClose={hideModal}>
          <h3>Editing: {note.title}</h3>
          <NoteForm handleComplete={updateAndClose} note={note}/>
        </Modal>
      </li>
    );
  }
}

NoteItem.propTypes = {
  note: PropTypes.object,
  handleRemoveNote: PropTypes.func,
  handleUpdateNote: PropTypes.func,
};
