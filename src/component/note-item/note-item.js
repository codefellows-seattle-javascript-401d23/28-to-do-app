import React from 'react';
import PropTypes from 'prop-types';
// import NoteForm from '../note-form/note-form';

export default class NoteItem extends React.Component {
  render() {
    return (
      <li>
                <h3>{this.props.note.title}</h3>
                <p>{this.props.note.content}</p>
                <button
                  id={this.props.note.id}
                  onClick={this.props.handleDeleteNote}>
                  Delete This Note</button>
      </li>
    );
  }
}
NoteItem.propTypes = {
  note: PropTypes.object,
  handleDeleteNote: PropTypes.func,
};
