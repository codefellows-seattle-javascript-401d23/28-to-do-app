import React from 'react';
import PropTypes from 'prop-types';

export default class NoteItem extends React.Component {
  render() {
    const { note, handleRemoveNote } = this.props;
    return (
      <li className='note-item'>
        <button id={ note.id } onClick={ handleRemoveNote.bind(null, note) }>
          mark as complete
        </button>
        <div>
          <h3>{ note.title }</h3>
          <p>{ note.content }</p>
        </div>
      </li>
    );
  }
}

NoteItem.propTypes = {
  note: PropTypes.object,
  handleRemoveNote: PropTypes.func,
};
