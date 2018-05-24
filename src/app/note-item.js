import React from 'react';
import autoBind from '../utils';

export default class NoteItem extends React.Component {
  constructor(props) {
    super(props);

    autoBind.call(this, NoteItem);
  }

  render() {
    return (
      <div>
        <li>
          {this.props.note.title}: {this.props.note.content}
        </li>
        <button 
        id={this.props.note.id} 
        onClick={() => this.props.handleRemoveNote(this.props.note)}>
        Delete
        </button>
      </div>
    );
  }
}
