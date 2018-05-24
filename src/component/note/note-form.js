import React from 'react';
import autoBind from '../../utils/index';

export default class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
    };

    autoBind.call(this, NoteForm);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleAddNote(this.state);
  }

  handleChange(e) {
    const { name, value } = e.target;
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
          placeholder='content'
          value={this.state.content}
          onChange={this.handleChange}
        />
        <button type='submit'>Create Expense</button>
      </form>
    );
  }
}
