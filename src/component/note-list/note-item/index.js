import React from 'react';
import autoBind from '../../../utils/index';

export default class NoteItem extends React.Component {
  constructor(props) {
    super(props);

    autoBind.call(this, NoteItem);
  }


  handleNotesList() {
    return (
        <ul>
          {
            this.state.notes.map((note) => {
              return (
                  <li key={note.id}>
                    {note.title} : {note.content}
                    <br/>
                    <button onClick='handleRemoveNote'>Remove Note</button>
                    <br/>
                  </li>
              );
            })
          }
        </ul>
    );
  }
}
