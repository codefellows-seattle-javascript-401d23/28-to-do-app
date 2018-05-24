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

  handleRemoveNote(note) {
    this.setState((previousState) => {
      return ({
        notes: previousState.notes.filter(item => item.id !== note.id),
      });
    });
  }

  componentDidUpdate() {
    localStorage.notes = JSON.stringify(this.state.notes);
  }

  componentDidMount() {
    if (localStorage.notes) {
      try {
        const notes = JSON.parse(localStorage.notes);
        return this.setState({ notes });
      } catch (err) {
        return console.error(err); // eslint-disable-line
      }
    } else {
      return null;
    }
  }

  render() {
    return (
      <section>
        <NoteForm
          className='note-form'
          handleAddNote={ this.handleAddNote }
        />
        <NoteList
          className='note-list'
          handleRemoveNote={ this.handleRemoveNote }
          notes={ this.state.notes }
        />
      </section>
    );
  }
}
