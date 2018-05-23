import React from 'react';
import autoBind from '../utils/utils';

export default class NoteForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      content: '',
    }

    autoBind.call(this, NoteForm);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.handleAddNote(this.state);
  }

  handleChange(event) {
    // optional ES6 destructuring here. We know event.target has name and value properties
    const { name, value } = event.target;
    // this bracket notation denotes a computed value or a dynamic property name
    this.setState({
      [name]: value,
    });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          name='title'
          placeholder='title'
          value={this.state.title}
          onChange={this.handleChange}
        />
        <input
          type='text'
          name='content'
          placeholder='type a note'
          value={this.state.content}
          onChange={this.handleChange}
        />

        <button type="submit">CreateNote</button>
      </form>
    );
  }
}
