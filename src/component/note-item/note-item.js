import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../modal/modal';
import NoteForm from '../note-form/note-form';

class NoteItem extends React.Component {
  render() {
    const { note, handleRemoveItem, handleUpdateNote } = this.props;
    
    const showModal = () => handleUpdateNote({ ...note, editing: true });
    
    const hideModal = () => handleUpdateNote({ ...note, editing: false });

    const updateAndClose = (updatedNote) => {
      handleUpdateNote({ ...updatedNote, editing: false });
    };

    return (
      <section className='note-item'>
        <li className='title' key={note.id}>
        {note.title} - {note.content}
        </li>
        <button className='updateButton' onClick={showModal}>Update</button>
        <Modal show={note.editing} handleClose={hideModal}>
        <h3>Editing {note.title}</h3>
        <NoteForm handleAddNotes={updateAndClose} note={note} />
        </Modal>

        <button className='remove' onClick={
          () => {
            return handleRemoveItem(note.id);
          }
        }>Remove this note</button>

      </section> 
    );
  }
}

NoteItem.propTypes = {
  expense: PropTypes.object,
  handleRemoveItem: PropTypes.func,
  handleUpdateNote: PropTypes.func,
};

export default NoteItem;
