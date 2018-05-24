import React from 'react';

export default class NoteItem extends React.Component {
  render() {
    return (
      <section>
        <li className='title' key={this.props.note.id}>
        {this.props.note.title} - {this.props.note.content}
        </li>
        <button className='remove' onClick={
          () => {
            return this.props.handleRemoveItem(this.props.note.id);
          }
        }>Remove this note</button>
      </section> 
    );
  }
}
