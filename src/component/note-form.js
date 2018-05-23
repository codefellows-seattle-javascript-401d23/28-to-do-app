import React from 'react';
import autobind from '../utils/autobind';

export default class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
    };
    autobind.call(this, NoteForm);
  }

  handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    const note = {
      title: this.state.title,
      content: this.state.content,
    };
    e.preventDefault();
    this.props.handleAddNote(note);
    this.setState({ title: '', content: '' });
  }

  render() {
    return (
      <form className='note-form' onSubmit={ this.handleSubmit }>
        <input
          type='text'
          name='title'
          value={ this.state.title }
          placeholder='Title'
          onChange={ this.handleChange }
          required
        />
        <input
          type='text'
          name='content'
          value={ this.state.content }
          placeholder='Content'
          onChange={ this.handleChange }
          required
        />
        <button type='submit'>Submit Note</button>
      </form>
    );
  }
}
