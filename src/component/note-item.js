import React from 'react';

export default class NoteItem extends React.Component {
  render() {
    return (
      <ul>
        {
          this.props.notes.map((note) => { // eslint-disable-line
            return (
              <li key={note.id}>
                <h3>{note.title}</h3>
                <p>{note.content}</p>
                <button
                  id={note.id}
                  onClick={this.props.handleDeleteNote}> { /* eslint-disable-line */ }
                  Delete This Note</button>
              </li>
            );
          })
        }
      </ul>
    );
  }
}
