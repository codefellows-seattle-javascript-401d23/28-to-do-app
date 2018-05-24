import React from 'react';
import autoBind from '../utils/utils';

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
    this.props.handleAddNote(this.state); // eslint-disable-line
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
        <br/>
        <input
          type='text'
          name='content'
          placeholder='type a note'
          value={this.state.content}
          onChange={this.handleChange}
        />
        <br/>

        <button type="submit">CreateNote</button>
      </form>
    );
  }
}
