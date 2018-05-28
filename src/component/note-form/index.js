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

  handleSubmit(event) {
    event.preventDefault();
    this.props.handleAddNote(this.state);
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
            type='text'
            name='title'
            placeholder='title'
            value={this.state.title}
            onChange={this.handleChange}
            />
          <input
            type='textArea'
            name='content'
            rows='10'
            cols='30'
            placeholder='content'
            value={this.state.content}
            onChange={this.handleChange}
            />
          <button type='submit'>Create Note</button>
        </form>
    );
  }
}
