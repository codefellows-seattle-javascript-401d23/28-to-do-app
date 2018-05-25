import React from 'react';
import PropTypes from 'prop-types';
import autoBind from '../../utils/utils';

const emptyState = {
  title: '',
  content: '',
};

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
    const buttonText = this.props.note ? 'Update' : 'Create';
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

        <button type="submit">{buttonText} Note</button>
      </form>
    );
  }
}
NoteForm.propTypes = {
  note: PropTypes.object,
  handleAddNote: PropTypes.func,
};
