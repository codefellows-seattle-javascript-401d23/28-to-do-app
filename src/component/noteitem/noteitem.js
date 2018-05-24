import React from 'react';
import autoBind from '../../utils/autobind';

export default class NoteItem extends React.Component {
  constructor(props) {
    super(props);

    autoBind.call(this, NoteItem);
  }

  handleRemove(event) {
    event.preventDefault();
    const { id } = event.target;
    this.props.handleRemoveNote(id);
  }

  render() {
    return (
      <li className = 'noteItem'>
        <div>
          <h2> { this.props.title } </h2>
          <p> { this.props.content } </p>
          <button id = { this.props.id } onClick = {this.handleRemove }> Finished? </button>
        </div>
      </li>
    );
  }
}
