import React from 'react';
import PropTypes from 'prop-types';
import autoBind from './../../utils';

const emptyState = {
  title: '',
  content: '',
};

export default class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    // Zachary - this is UI State
    this.state = this.props.note ? this.props.note : emptyState;
  
    autoBind.call(this, NoteForm);
  }
  //-------------------------------------------------------------------------
  // MEMBER FUNCTIONS (created entirely by the developer)
  //-------------------------------------------------------------------------
  handleSubmit(event) {
    event.preventDefault();
    // Zachary - Here I'm calling handleAddNote ASSUMING it's a function
    this.props.handleComplete(this.state);
  }

  handleChange(event) {
    const { name, value } = event.target;
    // this bracket notation denotes a computed value or a dynamic property name
    this.setState({
      [name]: value,
    });
  }
  //-------------------------------------------------------------------------
  // LIFECYCLE HOOKS
  //-------------------------------------------------------------------------
  render() {
    const buttonText = this.props.note ? 'Update' : 'Create';
    return (
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                name="title"
                placeholder="title"
                value={this.state.title}
                onChange={this.handleChange}
              />
              <input
                type="text"
                name="content"
                placeholder="content"
                value={this.state.content}
                onChange={this.handleChange}
              />
              <button type="submit">{buttonText} Note</button>
            </form>
    );
  }
}

NoteForm.propTypes = {
  note: PropTypes.object,
  handleComplete: PropTypes.func,
};
