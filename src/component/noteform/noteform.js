import React from 'react';
import PropTypes from 'prop-types';
import autoBind from '../../utils/autobind';

export default class NoteForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      content: '',
    };

    autoBind.call(this, NoteForm);
  }

  handleSubmit(event) {
    const note = {
      title: this.state.title,
      content: this.state.content,
    };
    event.preventDefault();
    this.props.handleAddNote(note);
    this.setState({
      title: '',
      content: '',
    });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const buttonText = this.props.note ? 'Update' : 'Create';
    return (
      <form onSubmit = { this.handleSubmit }>
        <input
          type = 'text'
          name = 'title'
          placeholder = 'title'
          value = { this.state.title }
          onChange = { this.handleChange }
        />
        <input
          type = 'text'
          name = 'content'
          placeholder = 'content'
          value = { this.state.content }
          onChange = { this.handleChange }
        />
        <button type = 'submit'> { buttonText } To-Do Item </button>
      </form>
    );
  }
}

NoteForm.propTypes = {
  handleAddNote: PropTypes.func,
  note: PropTypes.object,
};
