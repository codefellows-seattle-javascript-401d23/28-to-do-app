'use strict';

import React from 'react';
import autoBind from './../../utils/utils';
import './note-form.scss';

const emptyState = {
  title: '',
  content: '',
}

export default class NoteForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.note ? this.props.note : emptyState;

    autoBind.call(this, NoteForm);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.handleComplete(this.state);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          type="text"
          name="title"
          placeholder="Note Title..."
          value={this.state.title}
          onChange={this.handleChange}
        />
        <input 
          type="text"
          name="content"
          placeholder="Note Content"
          value={this.state.content}
          onChange={this.handleChange}
        />
        <button type="submit">Add Note</button>
      </form>
    );
  }
}