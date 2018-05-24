import React from 'react';
import PropTypes from 'prop-types';
import autobind from '../utils/autobind';

const emptyState = {
  title: '',
  content: '',
};

export default class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.note ? this.props.note : emptyState;
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
    this.setState(this.props.note ? this.props.note : emptyState);
  }

  render() {
    const buttonText = this.props.note ? 'update' : 'add';
    return (
      <form className='note-form' onSubmit={ this.handleSubmit }>
        <p>Add to-do items:</p>
        <input
          type='text'
          name='title'
          value={ this.state.title }
          placeholder='To-do Item'
          onChange={ this.handleChange }
          required
        />
        <input
          type='text'
          name='content'
          value={ this.state.content }
          placeholder='Description'
          onChange={ this.handleChange }
          required
        />
        <button type='submit'>{ buttonText }</button>
      </form>
    );
  }
}

NoteForm.propTypes = {
  handleAddNote: PropTypes.func,
  note: PropTypes.object,
};
