import React from 'react';
import autobind from '../utils/autobind';

export default class NoteItem extends React.Component {
  constructor(props) {
    super(props);
    autobind.call(this, NoteItem);
  }

  handleRemove(e) {
    e.preventDefault();
    const { id } = e.target;
    this.props.handleRemoveNote(id);
  }

  render() {
    return (
      <li className='note-item'>
        <button id={ this.props.id } onClick={ this.handleRemove }>mark as complete</button>
        <div>
          <h3>{ this.props.title }</h3>
          <p>{ this.props.content }</p>
        </div>
      </li>
    );
  }
}
