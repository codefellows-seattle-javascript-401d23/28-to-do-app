import React from 'react';
import PropTypes from 'prop-types';
import NoteItem from '../noteitem/noteitem';

export default class NoteList extends React.Component {
  render() {
    return (
      <div>
        <h2> Things I need to do: </h2>
        {
          this.props.notes && this.props.notes.length > 0 ?
          <ul className = 'noteList'>
            {
              this.props.notes.map((note) => {
                return (
                  <NoteItem 
                    key = { note.id }
                    id = { note.id }
                    handleRemoveNote = { this.props.handleRemoveNote }
                    title = { note.title }
                    content = { note.content }
                  />
                );
              })
            }
          </ul> :
          <p> You are all caught up! </p>
        }
      </div>
    );
  }
}

NoteList.propTypes = {
  notes: PropTypes.object,
  handleRemoveNote: PropTypes.func,
};
