import React from 'react';
import PropTypes from 'prop-types';
import autoBind from '../../../../utils/index';

export default class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
    };
    autoBind.call(this, NoteForm);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.add(this.state);
    this.setState({
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
    return (
      <form onSubmit={this.handleSubmit} className='noteForm'>
        <input 
          type="text"
          name="content"
          placeholder="What-To-Do?"
          value={this.state.content}
          onChange={this.handleChange}
        />
        <button type="submit">Create Note</button>
      </form>
    );
  }
}

NoteForm.propTypes = {
  add: PropTypes.func,
};
