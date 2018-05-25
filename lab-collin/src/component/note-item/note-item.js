import React from 'react';
import PropTypes from 'prop-types';
import Model from '../model/model';
import NoteForm from '../note-form/index';

class NoteItem extends React.Component {
  render() {
    const { note, handleDeleteNote, handleUpdateNote } = this.props;

    const showModel = () => handleUpdateNote({ ...note, editing: true });

    const hideModel = () => handleUpdateNote({ ...note, editing: false });

    const updateAndClose = (updatedNote) => {
      handleUpdateNote({ ...updatedNote, editing: false });
    };

    return (
       <div className='note-item'>
         <strong>{note.title}</strong> : {note.content}
         <button onClick={handleDeleteNote.bind(null, note)}> Delete </button>
         <button onClick={showModel}>Update</button>
         <Model show={note.editing} handleClose={hideModel}>
           {}
           <h3>Editing {note.title}</h3>
           <NoteForm handleComplete={updateAndClose} note={note} />
         </Model>
       </div>
    );
  }
}

NoteItem.propTypes = {
  Note: PropTypes.object,
  handleDeleteNote: PropTypes.func,
  handleUpdateNote: PropTypes.func,
};


export default NoteItem;
