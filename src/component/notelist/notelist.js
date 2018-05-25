'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import NoteItem from '../noteitem/noteitem';
import '../../styles/main.scss';
import autoBind from '../../utils';

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
              handleUpdateNote={this.props.handleUpdateNote}
              handleRemoveNote={this.props.handleRemoveNote}
              note={note}
              id={note.id}
              key={note.id}
              />
            );
          })
        }
      </ul>
    );
  }

  render() {
    return (
      <section className="NoteList">
      {
        !this.props.notes ?
        <div>
          <p>Enter a note please.</p>
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
