'use strict';

import React from 'react';
import Modal from '../modal/modal';
import NoteForm from '../note-form/note-form';
import PropTypes from 'prop-types';
import './note-item.scss';

export default class Note extends React.Component {
  render() {

    const { note, handleRemoveNote, handleUpdateNote } = this.props;

    const showModal = () => handleUpdateNote({...note, editing: true});

    const hideModal = () => handleUpdateNote({...note, editing: false});

    const updateAndClose = (updatedNote) => {
      handleUpdateNote({...updatedNote, editing: false });
    }


    return (
    <section className="note-in-list">
      <h4><strong>{note.title}</strong> --- <span onDoubleClick={showModal}>{note.content} (double click me to edit - lol)</span></h4>
      <button onClick={() => handleRemoveNote(note)}> Remove </button>
      {/* <button onClick={showModal}> Update </button> */}
      <Modal show={note.editing} handleClose={hideModal}>
        <h4>Editing Note: {note.title}</h4>
        <NoteForm handleComplete={updateAndClose} note={note}/>
      </Modal>

    </section>
    )
  }
};

Note.propTypes = {
  note: PropTypes.object,
  handleRemoveNote: PropTypes.func,
  handleUpdateNote: PropTypes.func,
};
