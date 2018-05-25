import React from 'react';
import uuid from 'uuid/v4';
import NoteForm from './../NoteForm/note-form';
import NoteItem from './../NoteItem/note-item';
import autoBind from '../../utils';


export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      notes: [],
    };

    autoBind.call(this, Dashboard);
  }

  handleAddNote(note) {
    console.log('THIS BUTTON WAS CLKOKAJFAJSDFAJSKDOF', note);
    if (note.title === '') {
      return this.setState({ error: true });
    }


    return this.setState((previousState) => { 
      return {
        notes: [...previousState.notes, { ...note, id: uuid() }],
        error: null,
      };
    });
  }

  handleRemoveNote(noteToRemove) {
    this.setState((previousState) => { // Zachary - this is an async operation
      return {
        notes: previousState.notes.filter(note =>
          note.id !== noteToRemove.id),
      };
    });
  }

  handleUpdateNote(noteToUpdate) {
    return this.setState((previousState) => { // Zachary - this is an async operation
      return {
        notes: previousState.notes.map(note =>
          (note.id === noteToUpdate.id ? noteToUpdate : note)),
      };
    });
  }

  render() {
    console.log(this.state.notes);
    return (
      <section className="dashboard">

        <div>
          <h1>Note Dashboard</h1>
          <NoteForm
            handleComplete={this.handleAddNote}
          />
          { this.state.error && <h2 className="error">You must enter a title</h2> }
          </div>
        {this.state.notes.length > 0 ?
        <div><p>All notes:</p>       
        <ul>
          {
            this.state.notes.map((note) => {
              return (
                <li key={note.id}>
                  <NoteItem
                    note={note}
                    handleRemoveNote={this.handleRemoveNote}
                    handleUpdateNote={this.handleUpdateExpense}
                  />
                  {note.content} : {note.title}
                </li>
              );
            })
          }
        </ul>
        </div>
        : null
        }
      </section>
    );
  }
}
