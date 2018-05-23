import React from 'react';
import uuid from 'uuid/v4';
import NoteForm from './note-form';
import NoteList from './note-list';
import autobind from '../utils/autobind';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
    };
    autobind.call(this, Dashboard);
  }

  handleAddNote(note) {
    note.id = uuid();
    this.setState((previousState) => {
      return ({
        notes: [...previousState.notes, note],
      });
    });
  }

  handleRemoveNote(id) {
    this.setState((previousState) => {
      return ({
        notes: [...previousState.notes].filter(item => item.id !== id),
      });
    });
  }

  render() {
    return (
      <section>
        <NoteForm handleAddNote={ this.handleAddNote }/>
        <NoteList
          handleRemoveNote={ this.handleRemoveNote }
          notes={ this.state.notes }
        />
      </section>
    );
  }
}
