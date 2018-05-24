import React from 'react';
import PropTypes from 'prop-types';
import NoteItem from './note-item';

export default class NoteList extends React.Component {
  render() {
    const { notes, handleRemoveNote, handleUpdateNote } = this.props;
    return (
      <div>
        <h3>My To-Do Items:</h3>
        {
          notes && notes.length > 0 ?
            <ul className='note-list'>
              {
                notes.map((note) => {
                  return (
                    <NoteItem
                      key={note.id}
                      id={note.id}
                      handleRemoveNote={ handleRemoveNote }
                      handleUpdateNote={ handleUpdateNote }
                      note={note}
                    />
                  );
                })
              }
            </ul> :
            <p>Your to-do list is empty.</p>
        }
      </div>
    );
  }
}

NoteList.propTypes = {
  notes: PropTypes.array,
  handleRemoveNote: PropTypes.func,
  handleUpdateNote: PropTypes.func,
};
