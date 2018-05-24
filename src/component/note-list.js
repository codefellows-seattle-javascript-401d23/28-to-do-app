import React from 'react';
import NoteItem from './note-item';

export default class NoteList extends React.Component {
  render() {
    return (
      <NoteItem
        notes={this.props.notes}
       handleDeleteNote={this.props.handleDeleteNote}
      />
    );
  }
}
