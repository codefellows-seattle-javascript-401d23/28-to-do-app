import React from 'react';
import autoBind from './../../utils/utils';

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
          type="test"
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
        <button type="submit">Create Note</button>
      </form>
    );
  }
}