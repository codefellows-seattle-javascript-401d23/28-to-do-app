import React from 'react';
import PropTypes from 'prop-types';
import NoteForm from '../note-form/note-form';
import Modal from '../modal/modal';
import './note-item.scss';

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
        <li className='note-item' onDoubleClick={ showModal }>
          <button id={ note.id } onClick={ handleRemoveNote.bind(null, note) }>
            mark as complete
          </button>
          <p className='instructions'><em>double click to edit</em></p>
          <div>
            <h3>{ note.title }</h3>
            <p>{ note.content }</p>
          </div>
        </li>
        <Modal show={ note.editing } handleClose={ hideModal }>
          <NoteForm handleAddNote={updateAndClose} note={note}/>
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
