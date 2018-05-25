import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../modal/modal';
import NoteForm from '../note-form/note-form';
import autoBind from '../utils/index';

export default class NoteItem extends React.Component {
  constructor(props) {
    super(props);

    autoBind.call(this, NoteItem);
  }

  render() {
    const { note, handleRemoveNote, handleUpdateNote } = this.props;

    const showModal = () => handleUpdateNote({ ...note, editing: true });
    const hideModal = () => handleUpdateNote({ ...note, editing: false });

    const updateAndClose = (updatedNote) => {
      handleUpdateNote({ ...updatedNote, editing: false });
    };

    return (
      <div className='note-item'>
        <strong>{note.title}</strong> : {note.content}
        <button onClick={handleRemoveNote.bind(null, note)}> Remove</button>
        <button onClick={showModal}>Update</button>
        <Modal show={note.editing} handleClose={hideModal}>
          <h3>Editing {note.title}</h3>
          <NoteForm handleComplete={updateAndClose} note={note}/>
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
