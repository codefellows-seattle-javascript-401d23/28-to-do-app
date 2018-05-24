import React from 'react';
import '../../../styles/main.scss';
import autoBind from '../../utils';

export default class NoteItem extends React.Component {
  constructor(props) {
    super(props);
    autoBind.call(this, NoteItem);
  }
  // handleRemoveNote(noteToRemove) {
  //   this.state.notes.filter((note) => note.id === noteToRemove.id);
  // }
  handleSubmit(event) {
    event.preventDefault();
    this.props.handleRemove(event.target.value);
  }
  handleChange(event) {
    const { name, value } = event.target; // events have these properties named as such already so can destructure
    // when we create form name, and value will map back to here-- just making it simple to purposefully link these [brackets] allow it to be dynamic?
    this.setState({
      [name]: value, // this will be event.target.name
    });
  }
  render() {
    return (
      <section className="NoteItem">
      <h1>{this.props.title}</h1>
      <p>{this.props.content}</p>
      
      <button value={this.props.id} onClick={this.handleSubmit}>delete note</button>
      </section>
    );
  }
};
