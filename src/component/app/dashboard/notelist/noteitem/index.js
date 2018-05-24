import React from 'react';

export default class NoteItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: this.props,
    };
    this.handleRemove = this.handleRemove.bind(this);
  }
  handleRemove(event) {
    event.preventDefault();
    this.props.remove(this.state.note);
  }
  render() {
    return (
      <li className='noteItem'>
        <p>{this.props.note.content}</p>
        <article>{this.props.note.createdOn.toString()}</article>
        <button onClick={this.handleRemove}>X</button>
      </li>
    );
  }
}
