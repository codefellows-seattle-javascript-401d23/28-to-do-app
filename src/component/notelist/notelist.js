import React from 'react';
import PropTypes from 'prop-types';
import NoteItem from '../noteitem/noteitem';

export default class NoteList extends React.Component {
  render() {
    const { notes, handleRemoveNote, handleUpdateNote } = this.props;
    return (
      <div>
        <h2> Things I need to do: </h2>
        {
          notes && notes.length > 0 ?
          <ul className = 'noteList'>
            {
              this.props.notes.map((note) => {
                return (
                  <NoteItem 
                    key = { note.id }
                    id = { note.id }
                    handleRemoveNote = { handleRemoveNote }
                    handleUpdateNote = { handleUpdateNote }
                    title = { note.title }
                    content = { note.content }
                  />
                );
              })
            }
          </ul> :
          <p> You are all caught up! </p>
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
