'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import autoBind from '../../utils/index';
import NoteItem from '../note-item/note-item';

export default class NoteList extends React.Component {
  constructor(props) {
    super(props);
    autoBind.call(this, NoteList);
  }

  handleNoteList() {
    return (
      <ul>
        {
          this.props.notes.map((note) => {
            return (
              <NoteItem
              key={note.id}
              note={note}
              id={note.id}
              handleRemoveNote={this.props.handleRemoveNote}
              handleUpdateNote={this.props.handleUpdateNote}
              />
            );
          })
        }
      </ul>
    );
  }

  render() {
    return (
      <section className="noteList">
        {
         !this.props.notes ?
         <div>
          <p>notes array is empty</p>
         </div> :
         <div>
          {this.handleNoteList()}
         </div>
        }
      </section>
    );
  }
}

NoteList.propTypes = {
  notes: PropTypes.array,
  handleRemoveNote: PropTypes.func,
  handleUpdateNote: PropTypes.func,
};
