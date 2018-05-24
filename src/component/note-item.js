import React from 'react';

function testMethod() {
  console.log('TEST METHOD');
}
export default class NoteItem extends React.Component {
  render() {
    return (
      <ul>
        {
          this.props.notes.map((note) => {
            return (
              <li key={note.id}>
                <h3>{note.title}</h3>
                <h3>ID: {note.id}</h3>
                <p>{note.content}</p>
                <button
                  id={note.id}
                  onClick={this.props.handleDeleteNote}>Delete This Note</button>
              </li>
            );
          })
        }
      </ul>
    );
  }
}
