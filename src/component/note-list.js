import React from 'react';
import NoteItem from './note-item';

export default class NoteList extends React.Component {
  render() {
    return (
      <NoteItem
        notes={this.props.notes} // eslint-disable-line
       handleDeleteNote={this.props.handleDeleteNote} // eslint-disable-line
      />
    );
  }
}
