import React from 'react';

export default class NoteItem extends React.Component {
  render() {
    return (
      <ul>
        {
          this.props.notes.map((note) => {
            return (
              <li key={note.id}>
                <h3>{note.title}</h3>
                <p>{note.content}</p>
              </li>
            );
          })
        }
      </ul>
    );
  }
}
