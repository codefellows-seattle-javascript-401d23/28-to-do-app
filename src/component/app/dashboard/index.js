import React from 'react';
import uuid from 'uuid/v4';
import autoBind from '../../../utils/index';
import NoteForm from './noteform/index';
import NoteList from './notelist/index';
import Groups from './groups/index';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
    };
    autoBind.call(this, Dashboard);
  }

  handleAdd(note) {
    if (note.content === '') {
      return this.setState({ error: true });
    }
    note.createdOn = new Date().toDateString();
    note.id = uuid();
    note.editing = null;
    note.group = note.project;
    return this.setState((previousState) => {
      return {
        notes: [...previousState.notes, note],
        error: null,
      };
    });
  }

  handleRemove(input) {
    return this.setState((previousState) => {
      return {
        notes: [...previousState.notes].filter((note) => {
          if (note.id !== input.id) return note;
          return null;
        }),
      };
    });
  }

  handleUpdate(noteToUpdate) {
    return this.setState((previousState) => {
      return {
        notes: previousState.notes.map(note => 
          (note.id === noteToUpdate.id ? noteToUpdate : note)),
      };
    });
  }

  render() {
    return (
      <div>
      <aside>
        <Groups/>
      </aside>
        <NoteList remove={this.handleRemove} notes={this.state.notes} update={this.handleUpdate}/>
        <NoteForm add={this.handleAdd} all={this.state.notes}/>
      </div>
    );
  }
}
