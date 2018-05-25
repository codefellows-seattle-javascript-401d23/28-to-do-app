import React from 'react';
import PropTypes from 'prop-types';
import NoteItem from '../note-item/note-item';
// import NoteForm from '../note-form/note-form';


export default class NoteList extends React.Component {
  render() {
    return (
      <ul>
        {
          this.props.notes.map((note) => {
            return (
              <NoteItem
                key={note.id}
                note={note}
                handleDeleteNote={this.props.handleDeleteNote}
                handleUpdateNote={this.props.handleUpdateNote}
              />
            );
          })
        }
      </ul>
    );
  }
}
NoteList.propTypes = {
  notes: PropTypes.array,
  handleDeleteNote: PropTypes.func,
  handleUpdateNote: PropTypes.func,
};
