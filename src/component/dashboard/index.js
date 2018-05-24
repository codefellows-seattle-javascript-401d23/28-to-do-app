import React from 'react';
import uuid from 'uuid/v4';
import NoteForm from './../note-form/index';
import autoBind from '../../utils';
import NoteList from './../note-list/index';


export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      error: null,
    };
    autoBind.call(this, Dashboard);
  }
  handleAddNotes(note) {
    if (note.title === '') {
      return this.setState({ error: true });
    }
    // note.createdOn = new Date();
    note.id = uuid(); // created random id and date

    return this.setState((previousState) => {
      return {
        notes: [...previousState.notes, note], 
        error: null,
      };
    });
  }
  handleRemoveItem(id) {
    return this.setState((previousState) => {
      const filteredNote = previousState.notes.filter(note => (note.id !== id));
      return {
        notes: filteredNote,
        error: null,
      };
    });
  }
  render() {
    return (
      <section className='dashboard'>
      <h1> Notes creator</h1>
      <NoteForm
        handleAddNotes={this.handleAddNotes}
      />
      <NoteList
        notes={this.state.notes}
        handleRemoveItem={this.handleRemoveItem}
      />
      </section>
    );
  }
}
