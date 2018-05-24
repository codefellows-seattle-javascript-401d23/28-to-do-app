import React from 'react';
import uuid from 'uuid/v4';
import NoteForm from './../note-form/index';
import autoBind from '../../utils';
import NoteList from './../note-list/index';


export default class NoteItem extends React.Component {
  // constructor(props) {
  //   super(props);
  //   // this.handleRemove = this.handleRemove.bind(this);
  // }
  // handleRemove(event) {
  //   console.log(this.props.note.id);
  //   event.preventDefault();
  //   this.props.handleRemoveItem(this.props.note.id);
  // }
  render() {
    return (
      <section>
        <li key={this.props.note.id}>
          "{this.props.note.title}" : {this.props.note.content}
        </li>
        <button onClick={
          () => {
            return this.props.handleRemoveItem(this.props.note.id);
          }
        }>Remove this note</button>
      </section> 
    );
  }
}
